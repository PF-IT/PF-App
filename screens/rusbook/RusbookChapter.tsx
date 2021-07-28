import * as React from "react";
import { Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
  Spinner
} from "@ui-kitten/components";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../utils/Auth";
import gql from "graphql-tag";
import useSWR from "swr";
import { baseurl, graphqlFetchWithToken } from "../../utils/api";
import Markdown from "react-native-markdown-renderer";
import Constants from "expo-constants";

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
  }`;

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
          source={{
            uri: Constants.manifest?.strapi + chapterZone.item.media[0].url,
          }} // TODO: add logic for multiple images
        />
      );
    case "ComponentRusbookStandard":
      return (
        <>
          <Image
            style={styles.image}
            source={{
              uri: Constants.manifest?.strapi + chapterZone.item.header[0].url,
            }}
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
  if (isError) { throw new Error("Error occured while fetching rusbook chapter") } // return <Text category="p2">{}</Text>;
  if (isLoading) return (
    <View style={{ alignItems: "center" , marginVertical: 20}}>
      <Spinner status='primary' size="giant" />
      <Text category="p2" style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>Do you have an internet connection?</Text>
    </View>
  );

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
  // layout: {
  //   flex: 1,
  //   //justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "white",
  // },
  // header: {
  //   backgroundColor: "red",
  //   width: "100%",
  //   paddingLeft: "5%",
  //   borderBottomWidth: 10,
  // },
  listContainer: {
    width: "100%",
  },
  contentContainer: {
    // alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  rusbookButton: {
    margin: 10,
    width: 200,
  },
  image: {
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.9,
    marginLeft: "auto",
    marginRight: "auto",
    // aspectRatio: 1,
    height: 300,
    marginBottom: 0,
    marginTop: 0,
    // borderWidth: 2,
    // borderColor: "blue",
    // backgroundColor: "#ffffff00",
    // backgroundColor: "red",
  },
  richText: {},
});

const mdstyles = StyleSheet.create({
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    marginBottom: -10,
    paddingBottom: 0,
    fontSize: 16,
  },
  strong: { fontWeight: "bold", fontSize: 14 },
  em: { fontStyle: "italic", fontSize: 14 },
  link: { fontWeight: "bold", color: "blue" },
  // list: { backgroundColor: "red" },
  heading: { marginTop: 15 },
  heading1: {
    fontSize: 24,
    fontWeight: "normal",
  },
  heading2: {
    fontSize: 16,
    fontWeight: "bold",
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
    fontSize: 16,
    fontWeight: "bold",
  },
});
