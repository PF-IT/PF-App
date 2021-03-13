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
} from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { RusbookScreen } from "../screens/Rusbook";
import RusWelcome from "../screens/rusbook/RusWelcomeScreen";
import RusPolytekniskForening from "../screens/rusbook/RusPolytekniskForening";
import { AboutScreen } from "../screens/About";

const HomeScreen = ({ navigation }: any) => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">Welcome</Text>
    <Button onPress={() => navigation.navigate("Rusbook")}>
      GO TO RUSBOOK
    </Button>
  </Layout>
);

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    {/* initial screen */}
    <HomeStack.Screen name="Home" component={HomeScreen} />

    {/* declaring other screens */}
    <HomeStack.Screen name="Rusbook" component={RusbookScreen} />
    <HomeStack.Screen name="Welcome" component={RusWelcome} />
    <HomeStack.Screen
      name="PolytekniskForening"
      component={RusPolytekniskForening}
    />
    {/* <HomeStack.Screen name="Education" component={RusEducation} />
        <HomeStack.Screen name="StudentLife" component={RusStudentLife} />
        <HomeStack.Screen name="DTU" component={RusDTU} />
        <HomeStack.Screen name="Dorms" component={RusDorms} />
        <HomeStack.Screen name="More" component={RusMore} /> */}
  </HomeStack.Navigator>
);
