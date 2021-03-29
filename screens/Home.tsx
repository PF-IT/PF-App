import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Divider,
  Layout,
  Text,
  withStyles,
  StyleService,
  useStyleSheet,
  ViewPager,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RusbookScreen } from "../screens/Rusbook";
import { useAuth } from "../utils/Auth";
import RusbookChapter from "./rusbook/RusbookChapter";

const HomeScreen = ({ navigation }: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const styles = useStyleSheet(themedStyles);
  const { status, authToken, basicAuthToken } = useAuth();
  return (
    <Layout style={styles.layout}>
      {/* <ImportantModal/> */}
      <Text style={styles.h1} category="h1">
        Welcome
      </Text>
      {/* <ViewPager
        style={styles.viewPager}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Layout style={styles.tab} level="2">
          <Text category="h5">1</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">2</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">3</Text>
        </Layout>
      </ViewPager> */}
      <Text style={styles.p2} category="p2">
        Connection status: {status}{" "}
      </Text>
      <Text style={styles.p2} category="p2">
        BasicToken: {basicAuthToken ? basicAuthToken : "none"}{" "}
      </Text>
      <Button onPress={() => navigation.navigate("Rusbook")}>
        GO TO RUSBOOK
      </Button>
    </Layout>
  );
};

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    {/* initial screen */}
    <HomeStack.Screen name="Home" component={HomeScreen} />
    {/* declaring other screens */}
    <HomeStack.Screen name="Rusbook" component={RusbookScreen} />
    {/* screen navigated to by rusbookNavCards in Rusbook screen */}
    <HomeStack.Screen name="RusbookChapter" component={RusbookChapter} />
  </HomeStack.Navigator>
);

const themedStyles = StyleService.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background-basic-color-1",
    padding: 10,
  },
  h1: { padding: 10 },
  p2: { paddingHorizontal: 40, paddingBottom: 20 },
  tab: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  viewPager: { paddingBottom: 10 },
});
