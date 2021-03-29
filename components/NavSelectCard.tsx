import React from "react";
import {
  Avatar,
  Card,
  Divider,
  Icon,
  Layout,
  Text,
  withStyles,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  ImageURISource,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FlexStyleProps, RenderProp } from "@ui-kitten/components/devsupport";


type NavSelectCardProps = {
  navigation: StackNavigationProp<any, string>
  chapter_id: string,
  title: string,
  icon_src: number | ImageURISource,
  description: string
};


export const NavSelectCard = (props: NavSelectCardProps) => {

  const Header = (props: any) => (
    <View {...props} style={[props.style, themedStyles.headerContainer]}>
      <Text category="h4" style={(props.style, themedStyles.headerText)}>
        Header
      </Text>
    </View>
  );

  const Footer = (props: any) => (
    <View {...props} style={[props.style, themedStyles.footerContainer]}>
      <Text category="h4" style={{ color: "white" }}>
        {props.title}
      </Text>
      {console.log(props)}
    </View>
  );

    return (
      <Card
        onPress={() => props.navigation.navigate('RusbookChapter', { chapter_id: props.chapter_id })}
        style={themedStyles.card}
        header={() => <Header title={props.title} />}
      // footer={() => <Footer title={props.title}/>}
      >
        <View style={themedStyles.content}>
          <Avatar shape="square" size="large" source={props.icon_src} />
          <Text category="p2" style={themedStyles.description}>
            {props.description}
          </Text>
        </View>
      </Card>
    );
  };

  const themedStyles = StyleService.create({
    headerText: {
      color: "nav-header-font-color",
    },
    headerContainer: {
      backgroundColor: "color-primary-500",
      padding: 5,
      paddingLeft: 10,
      borderRadius: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 5,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      margin: -10,
    },
    footerContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "blue", // TODO: get colors from theme
    },
    card: {
      flex: 1,
      justifyContent: "flex-start",
      marginVertical: 4,
      borderRadius: 4,
      borderWidth: 0,
      width: "90%",
      shadowColor: "#000",
      backgroundColor: "nav-card-background-color",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 3,
    },
    description: {
      marginLeft: 20,
      marginRight: 45,
      fontSize: 12,
      fontFamily: "Roboto",
    },
  });
