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
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  PureComponent,
} from "react-native";
import { useAuth } from "../../utils/Auth";
import gql from "graphql-tag";
import useSWR from "swr";
import { baseurl, graphqlFetchWithToken } from "../../utils/api";
import Markdown from "react-native-markdown-renderer";

// API Fetch function request chapter content
// TODO: should be put into a common API collection
function rusbookChapterContent(id: any) {
  const { status, authToken, basicAuthToken } = useAuth();

  // TODO: ensure we wait for a token before making a request!

  const query = gql`query {
            rusbookChapter(id: ${id}){
                Title,
                primary_color,
                Description,
                cover{
                    url
                }
            rusbookChapterZone {
            __typename
                ... on ComponentDefaultRichText {
                id,
                richText
                }
                ... on ComponentDefaultImage {
                    image {
                        url
                    }
                }
            }
        }
    }
    `;

  const { data, error } = useSWR(
    [query, basicAuthToken],
    graphqlFetchWithToken
  );

  console.log(data);

  return {
    chapterContent: data ? data.rusbookChapter : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}

const RenderContent = (chapterZone: any) => {
  console.log("The chapterZone");

  console.log(JSON.stringify(chapterZone));

  switch (chapterZone.item.__typename) {
    case "ComponentDefaultRichText":
      return (
        <Markdown style={mdstyles}>{chapterZone.item.richText}</Markdown>
        // <Text style={styles.richText}>{chapterZone.item.richText}</Text>
      );
    case "ComponentDefaultImage":
      return (
        <Image
          style={styles.image}
          source={{ uri: baseurl + chapterZone.item.image.url }}
        />
      );
    default:
      return <Text category="p1">NOT A VALID __TYPENAME</Text>;
  }
};

export default function RusbookChapter({ route, navigation }: any) {
  const { chapterContent, isLoading, isError } = rusbookChapterContent(
    route.params.chapter_id
  );
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: chapterContent.Title });
  }, [navigation, chapterContent.Title]);
  console.log("params: " + JSON.stringify(route.params));

  // TODO: add nice error and loading components
  if (isError) return <Text category="p2">Error</Text>;
  if (isLoading) return <Text category="p2">Loading...</Text>;

  return (
    // TODO: add content.cover as a hero
    <Layout style={styles.layout}>
      {/* Removed: */}
      {/* <Layout style={styles.header}>
        // Should be in navigation top:   
        <Text category="h1">{chapterContent.Title}</Text>
        // Should only be seen in the rusbook navigation:
        <Text category="p1">{chapterContent.Description}</Text>
      </Layout> */}
      <List
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        data={chapterContent.rusbookChapterZone}
        renderItem={RenderContent}
        // extraData={navigation}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
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
  image: {
    margin: 10,
    width: 400,
    height: 200,
  },
  richText: {},
});

const mdstyles = StyleSheet.create({
  text: { width: "90%", margin: 0, padding: 0 },
  strong: { fontWeight: "bold" },
  em: { fontStyle: "italic" },
  link: { fontWeight: "bold", color: "blue" },

  heading: {},
  heading1: {
    fontSize: 32,
    fontWeight: "normal",
  },
  heading2: {
    fontSize: 24,
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
