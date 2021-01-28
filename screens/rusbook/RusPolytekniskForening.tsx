import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function RusPolytekniskForening({ navigation }: any) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Polyteknisk Forening</Text>
        </Layout>
    );
}