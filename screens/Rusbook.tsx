import React from "react";
import useSWR from "swr";
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
import { graphql_fetcher } from "../utils/api";

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

export const RusbookScreen = ({ navigation }: any) => {
  //Data should be a list of RusbookChapter navigation options
  const { data, error } = useSWR("/graphql/rusbooks", graphql_fetcher);

  //We will render a list of these items once we've retrieved them from the DB. Until then we'll show a spinner and on error an error message.

  //This function component will take an item instance and create a listItem based on the instance information, index is used to show the chapters in correct order
  const renderRusChapter = ({ dataItem, index }: any) => (
    <ListItem
      title={`${dataItem.title}`}
      description={`${dataItem.description}`}
      onPress={() => {
        navigation.navigate(dataItem.route);
      }}
    />
  );

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E0E2",
      }}
    >
      <Divider />
      {/* <List
                style={styles.contentContainer}
                data={data} // swr will update the data
                ItemSeparatorComponent={Divider}
                renderItem={renderRusChapter} // component function will render data appropriately once retrieved
            /> */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NavSelectCard
          navigation={navigation}
          route="
          "
          title="Welcome"
          icon_src={{ uri: "https://robohash.org/1/?set=set2" }}
          description="Welcome letters for new students, from the presidents of PF and DTU"
        />
        <NavSelectCard
          navigation={navigation}
          route="Welcome"
          title="Bachelor study start"
          icon_src={{ uri: "https://robohash.org/2/?set=set4 " }}
          description="At DTU and PF newly started students have great study start events and activities. Here is a guide."
        />
        <NavSelectCard
          navigation={navigation}
          route="Welcome"
          title="Masters study start"
          icon_src={{ uri: "https://robohash.org/6/?set=set2" }}
          description="Information about the masters study start. Hekls jslf jeoif sjoie sklfæa lkjflse ajsdlfkjæd "
        />
        <NavSelectCard
          navigation={navigation}
          route="Welcome"
          title="Rusbogen to-go"
          icon_src={{ uri: "https://robohash.org/5/?set=set4 " }}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  rusbookButton: {
    margin: 10,
    width: 200,
  },
});
