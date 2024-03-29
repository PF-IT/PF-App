import React from "react";
import useSWR from "swr";
import { Text, List, StyleService, useStyleSheet } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { NavSelectCard } from "../components/NavSelectCard";
import { graphqlFetchWithToken, graphql_fetcher } from "../utils/api";
import { useAuth } from "../utils/Auth";
import { Content } from "native-base";
import { setStatusBarBackgroundColor } from "expo-status-bar";

// API fetch function
function rusbookChaptersShort() {
  const { status, authToken, basicAuthToken } = useAuth();

  // TODO: ensure we wait for a token before making a request!

  const query = `{
        rusbookChapters{
            id,
            Title,
            Description
        }
    }
    `;
  const { data, error } = useSWR(
    [query, basicAuthToken],
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
    console.log(item);
    console.log("The ID: " + item.id);
    console.log("The Title: " + item.Title);

    return (
      <NavSelectCard
        navigation={navigation}
        title={item.Title}
        chapter_id={item.id} // chapter id is being passed, such that chapter content can be fetched also
        icon_src={require("~/assets/images/favicon.png")} // TODO: get icon from backend
        description={item.Description}
      />
    );
  };

  // TODO: add nice error and loading components
  console.log(isError);
  if (isError) return <Text category="p2">Error...</Text>;
  if (isLoading) return <Text category="p2">Loading...</Text>;

  return (
    <List
      style={styles.listContainer}
      contentContainerStyle={styles.contentContainer}
      data={chaptersShort}
      renderItem={renderRusbookNavCard}
      extraData={navigation}
    />
  );
};

const themedStyles = StyleService.create({
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
