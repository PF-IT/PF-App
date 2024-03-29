import * as React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../utils/Auth";
import gql from "graphql-tag";
import useSWR from "swr";
import { baseurl, graphqlFetchWithToken } from "../../utils/api";
import Markdown from "react-native-markdown-renderer";
import Constants from 'expo-constants';

// API Fetch function request chapter content
// TODO: should be put into a common API collection
function rusbookChapterContent(id: any) {
  const { status, authToken, basicAuthToken } = useAuth();

  // TODO: ensure we wait for a token before making a request!

  // console.log(id);

  const query = gql`query {
            rusbookChapter(id: "${id}"){
              Title,
                # primary_color,
                Description,
                # cover{
                #     url
                # }
            content {
            __typename
                ... on ComponentRusbookOnlyText {
                id,
                content
                },
                ... on ComponentRusbookOnlyMedia {
                  media {
                    url
                  }
                },
              	... on ComponentRusbookStandard {
                  id,
                  header { # image
                    url
                  },
                  content
                }
            }
    }
  }`

  const { data, error } = useSWR(
    [query, basicAuthToken],
    graphqlFetchWithToken
  );

  // console.log(data);

  return {
    chapterContent: data ? data.rusbookChapter : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}

const RenderContent = (chapterZone: any) => {
  // console.log("The chapterZone");
  // console.log(chapterZone);
  

  switch (chapterZone.item.__typename) {
    case "ComponentRusbookOnlyText":
      return (
        <Markdown style={mdstyles}>{chapterZone.item.content}</Markdown>
        // <Text style={styles.richText}>{chapterZone.item.richText}</Text>
      );
    case "ComponentRusbookOnlyMedia":
      return (
        <Image
          style={styles.image}
          source={{ uri: Constants.manifest?.strapi + chapterZone.item.media[0].url }} // TODO: add logic for multiple images
        />
      );
    case "ComponentRusbookStandard":
      return (
        <>
          <Image
            style={styles.image}
            source={{ uri: Constants.manifest?.strapi + chapterZone.item.header[0].url}}
          />
          <Markdown style={mdstyles}>{chapterZone.item.content}</Markdown>
        </>
      );
    default:
      return <Text category="p1">NOT A VALID __TYPENAME</Text>;
  }
};

export default function RusbookChapter({ route, navigation }: any) {
  // console.log("params: " + JSON.stringify(route.params));
  const { chapterContent, isLoading, isError } = rusbookChapterContent(
    route.params.chapter_id
  );

  React.useLayoutEffect(() => {
    if (chapterContent) {
      navigation.setOptions({ title: chapterContent.Title });
    }

  }, [navigation, chapterContent]);

  // TODO: add nice error and loading components
  if (isError) return <Text category="p2">Error</Text>;
  if (isLoading) return <Text category="p2">Loading...</Text>;

  return (
    // TODO: add content.cover as a hero
    // <Layout style={styles.layout}>
      <List
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        data={chapterContent.content}
        renderItem={RenderContent}
      // extraData={navigation}
      />
    // </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: "5%",
    borderBottomWidth: 10,
  },
  listContainer: {
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  rusbookButton: {
    margin: 10,
    width: 200,
  },
  image: { width: 400, height: 120, marginBottom: 5, marginTop: 5 },
  richText: {},
});

const mdstyles = StyleSheet.create({
  text: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    marginBottom: -10,
    paddingBottom: 0,
  },
  strong: { fontWeight: "bold" },
  em: { fontStyle: "italic" },
  link: { fontWeight: "bold", color: "blue" },

  heading: { marginTop: 15 },
  heading1: {
    fontSize: 24,
    fontWeight: "normal",
  },
  heading2: {
    fontSize: 20,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
});
