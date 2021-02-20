import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { RusbookScreen } from '../screens/Rusbook';
import RusWelcome from '../screens/rusbook/RusWelcomeScreen';
import RusPolytekniskForening from '../screens/rusbook/RusPolytekniskForening';
import { useAuth } from '../utils/Auth';
import RusbookChapter from './rusbook/RusbookChapter';

const HomeScreen = ({ navigation }: any) => {
   const { status, authToken, basicAuthToken } = useAuth();

    return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <ImportantModal/> */}
        <Text category='h1'>Welcome</Text>
        <Text category='p2'>Connection status: {status} </Text>
        <Text category='p2'>BasicToken: {basicAuthToken ? basicAuthToken : 'none'} </Text>
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
        {/* screen navigated to by rusbookNavCards in Rusbook screen */}
        <HomeStack.Screen name="RusbookChapter" component={RusbookChapter} />
    </HomeStack.Navigator>
);