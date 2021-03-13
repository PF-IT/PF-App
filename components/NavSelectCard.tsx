import React from 'react';
import { Avatar, Card, Divider, Icon, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ImageURISource, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlexStyleProps, RenderProp } from '@ui-kitten/components/devsupport';

const Header = (props: any) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
        <Text category='h1'>Header</Text>
    </View>
);

const Footer = (props: any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Text category='h4' style={{ color: 'white' }}>{props.title}</Text>
        {console.log(props)}
    </View>
);

type NavSelectCardProps = {
    navigation: StackNavigationProp<any, string>
    chapter_id: string,
    title: string,
    icon_src: number | ImageURISource,
    description: string
};

export const NavSelectCard = (props: NavSelectCardProps) => {

    return (
        <Card onPress={() => props.navigation.navigate('RusbookChapter', {chapter_id: props.chapter_id})} style={styles.card} footer={() => <Footer title={props.title}/>}>
            <View style={styles.content}>
                <Avatar style={styles.avatar} size='large' source={props.icon_src} />
                <Text category='p2' style={styles.description}>{props.description}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'red',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue', // TODO: get colors from theme
        padding: 10,
        borderColor: 'blue',
    },
    card: {
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'flex-start',
        marginVertical: 4,
        marginHorizontal: 2,
        width: '85%',
        borderColor: 'blue'
    },
    icon: {
        width: 20,
        height: 20
    },
    avatar: {
        margin: 8,
    },
    title: {
        marginTop: 5
    },
    description: {
        // width: '80%',
        flexWrap: 'wrap',
        marginRight: 30,
        paddingRight: 30,
        fontSize: 16,
    }
});