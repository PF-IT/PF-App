import React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  // Button,
  Divider,
  Layout,
  // Text,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { AboutScreen } from "../../screens/About";
import { HomeStackScreen } from "../../screens/Home";
import { RusbookScreen } from "../../screens/Rusbook";
import RusbookChapter from "../../screens/rusbook/RusbookChapter";

// Custom styling of navigation
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
    <BottomNavigationTab title={<Text>About</Text>} />

    <BottomNavigationTab title={<Text>Rusbook</Text>} />
  </BottomNavigation>
);

// ACTUAL NAVIGATION
function Logo() {
  return (
    <Image
      style={{ width: 35, height: 35, marginRight: 8 }}
      source={require("../../assets/images/logo.png")}
    />
  );
}

const RusbookStack = createStackNavigator();
const RusbookStackScreen = () => (
  <RusbookStack.Navigator>
    <RusbookStack.Screen
      name="Rusbook"
      component={RusbookScreen}
      options={{
        //TODO SHOULD BE GLOBAL FOR ALL HOMESCREENS
        headerStyle: {
          backgroundColor: "#009FE3",
        },
        headerBackTitleVisible: true,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
        headerRight: (props) => <Logo {...props} />,
      }}
    />
    <RusbookStack.Screen
      name="RusbookChapter"
      component={RusbookChapter}
      options={{
        //TODO SHOULD BE GLOBAL FOR ALL HOMESCREENS
        headerStyle: {
          backgroundColor: "#009FE3",
        },
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
        headerRight: (props) => <Logo {...props} />,
      }}
    />
  </RusbookStack.Navigator>
);

// root of navigation tree
const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Rusbook"
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Rusbook" component={RusbookStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

// Top navigation
// const Stack = createStackNavigator();
// export const AppStack = () => (
//   <Stack.Navigator>
//     {/* initial screen */}
//     <Stack.Screen
//       name="Rusbook"
//       component={RusbookScreen}
//       options={{
//         //TODO SHOULD BE GLOBAL FOR ALL HOMESCREENS
//         headerStyle: {
//           backgroundColor: "#009FE3",
//         },
//         headerBackTitleVisible: true,
//         headerTitleAlign: "left",
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontFamily: "Roboto",
//           fontWeight: "bold",
//         },
//       }}
//     />
//     {/* screen navigated to by rusbookNavCards in Rusbook screen */}
//     <Stack.Screen
//       name="RusbookChapter"
//       component={RusbookChapter}
//       options={{
//         //TODO SHOULD BE GLOBAL FOR ALL HOMESCREENS
//         headerStyle: {
//           backgroundColor: "#009FE3",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontFamily: "Roboto",
//           fontWeight: "bold",
//         },
//       }}
//     />
//   </Stack.Navigator>
// );

// Buttom navigation
// const TabNavigator = () => (
//   <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
//     <Screen name="About" component={AboutScreen} />
//     <Screen name="Rusbook" component={RusbookScreen} />
//     <Screen name="RusbookChapter" component={RusbookChapter} />
//   </Navigator>
// );
