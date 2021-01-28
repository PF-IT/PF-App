import React from 'react';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export const AboutScreen = ({ navigation }: any) => {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>What is this app about?</Text>
            <Text style={{ padding: 20 }}>
                <Text>
                    Traditionally DTU students were handed a physical version of the handbook called "Rusbogen".
          The main purpose of this app is to provide a more<Text style={{ fontWeight: 'bold' }}> sustainable and accessible </Text>
          way for students to look up important information regarding their studies.
          Hence, remove the need to print a physical version of the handbook. 👏
          </Text>
            </Text>
            <Text style={{ fontStyle: 'italic' }}>- Starostka & Sam</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    normal: {
        fontSize: 12,
        padding: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
