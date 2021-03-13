import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Divider,
  Icon,
  Layout,
  Text,
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { RusbookScreen } from "../../screens/Rusbook";
import RusWelcome from "../../screens/rusbook/RusWelcomeScreen";
import RusPolytekniskForening from "../../screens/rusbook/RusPolytekniskForening";
import { AboutScreen } from "../../screens/About";
import { HomeStackScreen } from "../../screens/Home";
import {
  ImageURISource,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// next should stay in Navigator.tsx
const { Navigator, Screen } = createBottomTabNavigator();
type ButtomTabBarProps = {
  navigation: any; // what type should this have????
  state: any; //{routeNames: number[], index: number}
};

const BottomTabBar = ({ navigation, state }: ButtomTabBarProps) => (
  <BottomNavigation
    indicatorStyle={styles.indicator}
    style={styles.bottomBar}
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      style={styles.tabs}
      title={<Text style={{ color: "white" }}>About</Text>}
    />

    <BottomNavigationTab
      style={styles.tabs}
      title={<Text style={{ color: "white" }}>Home</Text>}
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="About" component={AboutScreen} />
    <Screen name="Home" component={HomeStackScreen} />
  </Navigator>
);

const Stack = createStackNavigator();
// root of navigation tree
export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "#009fe3",
  },
  tabs: {},
  indicator: {
    backgroundColor: "#0081B8",
    height: 5,
  },
});
