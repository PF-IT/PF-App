import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function RusbookChapter({ navigation }: any) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Need to fetch content. But we are here, yay!</Text>
            <Text category='p1'>Read content as prop or "similar" and format it according to defined strapi layout</Text>
        </Layout>
    );
}