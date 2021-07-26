import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Divider,
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { AboutScreen } from "../../screens/About";
import { HomeStackScreen } from "../../screens/Home";

// next should stay in Navigator.tsx
const { Navigator, Screen } = createBottomTabNavigator();
type ButtomTabBarProps = {
  navigation: any; // what type should this have????
  state: any; //{routeNames: number[], index: number}
};

const BottomTabBar = ({ navigation, state }: ButtomTabBarProps) => (
  <BottomNavigation
    indicatorStyle={{ backgroundColor: "#0081B8", height: 5 }}
    style={{ backgroundColor: "#009FE3" }}
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      title={<Text style={{ color: "white" }}>About</Text>}
    />

    <BottomNavigationTab title={<Text style={{ color: "white" }}>Home</Text>} />
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
