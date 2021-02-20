import React from "react";
import useSWR from "swr";
import { LogBox } from "react-native";
import { SafeAreaView } from "react-native";
import {
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
  BottomNavigation,
  Icon,
  ListItem,
  List,
} from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RusWelcome from "./rusbook/RusWelcomeScreen";
import RusPolytekniskForening from "./rusbook/RusPolytekniskForening";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavSelectCard } from "../components/NavSelectCard";
import { graphqlFetchWithToken, graphql_fetcher } from "../utils/api";
import { useAuth } from "../utils/Auth";
import { Content } from "native-base";

// TODO: MAY MOVE THIS TO EALIER STAGE OF PROGRAM LIKE types.tsx or App.tsx
type RusbookStackParamList = {
  Welcome: undefined; // we can pass params to Welcome screen here
  PolytekniskForening: undefined;
  Education: undefined;
  StudentLife: undefined;
  DTU: undefined;
  Dorms: undefined;
  More: undefined; // screen for extra stuff like "links"
};

type RusbookProps = {
  navigation: any;
};

// type RusbookChapters {
//     id: ID!
//     created_at: DateTime!
//     updated_at: DateTime!
//     Title: String
//     Description: String
//     rusbookChapterZone: [RusbookChaptersRusbookChapterZoneDynamicZone]
//     cover: UploadFile
//     primary_color: ENUM_RUSBOOKCHAPTERS_PRIMARY_COLOR
//     published_at: DateTime
//   }

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

  // component to render navCard
  const renderRusbookNavCard = ({ item }: any) => {
    console.log(item);

    return (
      <NavSelectCard
        navigation={navigation}
        route="RusbookChapter"
        title={item.Title}
        icon_src={require("~/assets/images/favicon.png")} // get icon from backend
        description={item.Description}
      />
    );
  };

  // TODO: add nice error and loading components
  if (isError) return <Text category="p2">Error</Text>;
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

const styles = StyleSheet.create({
  listContainer: {
    // maxHeight: 320,
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
