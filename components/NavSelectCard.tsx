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
import { SvgUri } from "react-native-svg";

type NavSelectCardProps = {
  navigation: StackNavigationProp<any, string>;
  chapter_id: string;
  title: string;
  icon_src: number | ImageURISource;
  description: string;
};

export const NavSelectCard = (props: NavSelectCardProps) => {
  const styles = useStyleSheet(themedStyles);
  // console.log(props);
  

  const Header = (props: any) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
      <Text category="h4" style={(props.style, styles.headerText)}>
        {props.title}
      </Text>
    </View>
  );

  const Footer = (props: any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Text category="h4" style={{ color: "white" }}>
        {props.title}
      </Text>
      {console.log(props)}
    </View>
  );

  return (
    <Card
      onPress={() =>
        props.navigation.navigate("RusbookChapter", {
          chapter_id: props.chapter_id,
        })
      }
      style={styles.card}
      header={() => <Header title={props.title} />}
      // footer={() => <Footer title={props.title}/>}
    >
      <View style={styles.content}>
        {/* <Avatar shape="square" size="large" source={props.icon_src} /> */}
        <SvgUri
          width="100%"
          height="100%"
          uri={String(props.icon_src)}
        />
        <Text category="p2" style={styles.description}>
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
    marginVertical: 4,
    borderRadius: 4,
    borderWidth: 0,
    width: 400,
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
