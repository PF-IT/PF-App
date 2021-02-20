import React from 'react';
import { Avatar, Card, Divider, Icon, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ImageURISource, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlexStyleProps, RenderProp } from '@ui-kitten/components/devsupport';

const Header = (props: any) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
        <Text category='h4' style={{ color: 'white' }}>{props.title}</Text>
    </View>
);

const Footer = (props: any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Text category='h4' style={{ color: 'white' }}>{props.title}</Text>
        {console.log(props)}
    </View>
);

type NavSelectCardProps = {
    navigation: StackNavigationProp<any, string>,
    route: string,
    title: string,
    icon_src: number | ImageURISource,
    description: string
};

export const NavSelectCard = (props: NavSelectCardProps) => {

    return (
        <Card onPress={() => props.navigation.navigate(props.route)} style={styles.card} header={() => <Header title={props.title}/>} 
        // footer={() => <Footer title={props.title}/>}
        >
            <View style={styles.content}>
                <Avatar style={styles.avatar} size='large' source={props.icon_src} />
                <Text category='p2' style={styles.description}>{props.description}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#009FE3',
        padding: 10,
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
        borderColor: '#009FE3',
    },
    card: {
        marginLeft: 0,
        marginRight: 0,
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 4,
        marginHorizontal: 2,
        width: '85%',
        borderRadius: 0,
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