import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Button, Divider, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { RusbookScreen } from '../screens/Rusbook';
import RusWelcome from '../screens/rusbook/RusWelcomeScreen';
import RusPolytekniskForening from '../screens/rusbook/RusPolytekniskForening';
import { AboutScreen } from '../screens/About';
import { ImportantModal } from '../components/ImportantModal';
import request from 'graphql-request';
import useSWR from 'swr';

const HomeScreen = ({ navigation }: any) => {
    // const [jwt, setJWT] = useState("");
    // const {token, isLoading, isError} = getToken();
    
    // const jwt = token ? token : undefined;
    // console.log(jwt);

    return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <ImportantModal/> */}
        <Text category='h1'>Welcome</Text>
        {/* <Text category='p2'>Your jwt token: {token.login.jwt}</Text> */}
        <Button onPress={() => navigation.navigate('Rusbook')}>GO TO RUSBOOK</Button>
    </Layout>
)};

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
    <HomeStack.Navigator>
        {/* initial screen */}
        <HomeStack.Screen name="Home" component={HomeScreen} />

        {/* declaring other screens */}
        <HomeStack.Screen name="Rusbook" component={RusbookScreen} />
        <HomeStack.Screen name="Welcome" component={RusWelcome} />
        <HomeStack.Screen name="PolytekniskForening" component={RusPolytekniskForening} />
        {/* <HomeStack.Screen name="Education" component={RusEducation} />
        <HomeStack.Screen name="StudentLife" component={RusStudentLife} />
        <HomeStack.Screen name="DTU" component={RusDTU} />
        <HomeStack.Screen name="Dorms" component={RusDorms} />
        <HomeStack.Screen name="More" component={RusMore} /> */}
    </HomeStack.Navigator>
);