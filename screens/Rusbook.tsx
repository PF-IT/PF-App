import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, TopNavigation, BottomNavigation, Icon } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RusWelcome from './rusbook/RusWelcomeScreen';
import RusPolytekniskForening from './rusbook/RusPolytekniskForening';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavSelectCard } from '../components/NavSelectCard';

// TODO: MAY MOVE THIS TO EALIER STAGE OF PROGRAM LIKE types.tsx or App.tsx
type RusbookStackParamList = {
    Welcome: undefined, // we can pass params to Welcome screen here
    PolytekniskForening: undefined,
    Education: undefined,
    StudentLife: undefined,
    DTU: undefined,
    Dorms: undefined,
    More: undefined, // screen for extra stuff like "links"
};

type RusbookProps = {
    navigation: any;
};

export const RusbookScreen = ({ navigation }: any) => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ margin: 10 }} category='h1'>Select chapter</Text>
        <Divider />
        <ScrollView contentContainerStyle={styles.contentContainer} >
            {/* CONVERT THESE INTO BEAUTIFUL CARDS */}
            <NavSelectCard
                navigation={navigation}
                route='Welcome'
                title='Welcome'
                icon_src={require('~/assets/images/favicon.png')}
                description="Welcome to DTU let us tell you about opportunities available through DTU and PF." />
            {/* <Button style={styles.rusbookButton} onPress={() => navigation.navigate('Welcome')}>Welcome</Button>
            <Button style={styles.rusbookButton} onPress={() => navigation.navigate('PolytekniskForening')}>Polyteknisk Forening</Button>
            <Button style={styles.rusbookButton} disabled={true} onPress={() => navigation.navigate('Education')}>Education</Button>
            <Button style={styles.rusbookButton} disabled={true} onPress={() => navigation.navigate('StudentLife')}>Student Life</Button>
            <Button style={styles.rusbookButton} disabled={true} onPress={() => navigation.navigate('DTU')}>DTU</Button>
            <Button style={styles.rusbookButton} disabled={true} onPress={() => navigation.navigate('Dorms')}>Dorms</Button>
            <Button style={styles.rusbookButton} disabled={true} onPress={() => navigation.navigate('More')}>More</Button> */}
        </ScrollView>
    </Layout>
);

const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        alignItems: 'center'
    },
    rusbookButton: {
        margin: 10,
        width: 200
    },
});