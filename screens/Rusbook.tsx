import React from "react";
import useSWR from "swr";
import {
  Text,
  List,
  StyleService,
  useStyleSheet,
  Layout,
  Spinner,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { NavSelectCard } from "../components/NavSelectCard";
import { graphqlFetchWithToken, graphql_fetcher } from "../utils/api";
import { useAuth } from "../utils/Auth";
import { Content } from "native-base";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import Constants from "expo-constants";

// API fetch function

function rusbookChaptersShort() {
  const { status, authToken, basicAuthToken } = useAuth();

  // TODO: ensure we wait for a token before making a request!

  const query = `{
        rusbookChapters{
            id,
            Title,
            Description,
            Icon {
              url
            }
        }
    }
    `;
  const { data, error } = useSWR(
    basicAuthToken ? [query, basicAuthToken] : null,
    graphqlFetchWithToken
  );

  return {
    chaptersShort: data ? data.rusbookChapters : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}

export const RusbookScreen = ({ navigation }: any) => {
  const { chaptersShort, isLoading, isError } = rusbookChaptersShort();
  const styles = useStyleSheet(themedStyles);
  // component to render navCard
  const renderRusbookNavCard = ({ item }: any) => {
    // console.log(item);
    // console.log("The ID: " + item.id);
    // console.log("The Title: " + item.Title);
    // console.log(Constants.manifest?.strapi + item.Icon.url);

    return (
      <NavSelectCard
        navigation={navigation}
        title={item.Title}
        chapter_id={item.id} // chapter id is being passed, such that chapter content can be fetched also
        icon_src={Constants.manifest?.extra?.strapi + item.Icon.url}
        // icon_src={require("~/assets/images/favicon.png")} // TODO: get icon from backend
        description={item.Description}
      />
    );
  };

  // TODO: add nice error and loading components
  //if (isError) return <Text category="p2" style={{ alignItems: "center", justifyContent: "center" }}>Error...</Text>;
  if (isError) {
    throw new Error(
      "Failed to fetch short information about rusbook chapters."
    );
  }
  if (isLoading)
    return (
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Spinner status="primary" size="giant" />
        <Text
          category="p2"
          style={{ alignItems: "center", justifyContent: "center", margin: 20 }}
        >
          Do you have an internet connection?
        </Text>
      </View>
    );

  return (
    <Layout style={styles.layout}>
      <List
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        data={chaptersShort}
        renderItem={renderRusbookNavCard}
        extraData={navigation}
      />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background-basic-color-1",
    // padding: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  h1: { padding: 10, color: "color-primary-500" },
  p2: { paddingHorizontal: 40, paddingBottom: 20 },
  tab: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  viewPager: { paddingBottom: 10 },
  listContainer: {
    // maxHeight: 320,
    backgroundColor: "background-basic-color-1",
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
  },
  rusbookButton: {
    margin: 10,
    width: 200,
  },
});
