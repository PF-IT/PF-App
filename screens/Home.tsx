import React from "react";
import { Button, Layout, Text, Avatar } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { RusbookScreen } from "../screens/Rusbook";
import RusWelcome from "../screens/rusbook/RusWelcomeScreen";
import RusPolytekniskForening from "../screens/rusbook/RusPolytekniskForening";
import { useAuth } from "../utils/Auth";
import {
  ImageURISource,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const { status, authToken, basicAuthToken } = useAuth();

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* <ImportantModal/> */}
      <Text category="h1">Welcome</Text>
      <Text style={{ marginBottom: 20 }} category="p2">
        Connection status: {status}{" "}
      </Text>
      <Text
        style={{ marginTop: 10, paddingLeft: 30, paddingRight: 30 }}
        category="p2"
      >
        BasicToken: {basicAuthToken ? basicAuthToken : "none"}{" "}
      </Text>
      <Button
        style={{
          backgroundColor: "#009FE3",
          borderWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 3,
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Rusbook")}
      >
        GO TO RUSBOOK
      </Button>
    </Layout>
  );
};

const PFLogo = () => (
  <Avatar
    style={{}}
    size="large"
    source={{ uri: "https://robohash.org/1/?set=set2" }}
  />
);

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    {/* initial screen */}
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        //TODO SHOULD BE GLOBAL FOR ALL HOMESCREENS
        headerStyle: {
          backgroundColor: "#009FE3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
      }}
    />

    {/* declaring other screens */}
    <HomeStack.Screen
      name="Rusbook"
      options={{
        headerStyle: {
          backgroundColor: "#009FE3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
      }}
      component={RusbookScreen}
    />
    <HomeStack.Screen
      name="Welcome"
      options={{
        headerStyle: {
          backgroundColor: "#009FE3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto",
          fontWeight: "bold",
        },
      }}
      component={RusWelcome}
    />
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
