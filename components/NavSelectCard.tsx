import React from "react";
import {
  Avatar,
  Card,
  Divider,
  Icon,
  Layout,
  Text,
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

const Header = (props: any) => (
  <View {...props} style={[props.style, styles.headerContainer]}>
    <Text category="h5" style={styles.header}>
      {props.title}
    </Text>
  </View>
);

const Footer = (props: any) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text style={{ color: "white" }}>{props.title}</Text>
    {console.log(props)}
  </View>
);

type NavSelectCardProps = {
  navigation: StackNavigationProp<any, string>;
  route: string;
  title: string;
  icon_src: number | ImageURISource;
  description: string;
};

export const NavSelectCard = (props: NavSelectCardProps) => {
  return (
    <Card
      onPress={() => props.navigation.navigate(props.route)}
      style={styles.card}
      header={() => <Header title={props.title} />}
      // footer={() => <Footer title={props.title}/>}
    >
      <View style={styles.content}>
        <Avatar
          shape="square"
          style={styles.avatar}
          size="large"
          source={props.icon_src}
        />
        <Text category="p2" style={styles.description}>
          {props.description}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "white",
  },
  headerContainer: {
    backgroundColor: "#009FE3",
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
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    // borderColor: "blue",
    // borderWidth: 1,
    margin: -10,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue", // TODO: get colors from theme
    // padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    borderWidth: 0,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 3,

    // marginLeft: -2,
  },
  avatar: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    // marginTop: 5,
  },
  description: {
    // backgroundColor: "red",
    // flexWrap: "wrap",
    // width: "80%",
    marginLeft: 20,
    marginRight: 45,
    fontSize: 12,
    fontFamily: "Roboto",
    // marginTop: 0,
    // marginBottom: 0,
  },
});
