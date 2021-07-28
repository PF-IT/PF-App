import React from "react";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export const AboutScreen = ({ navigation }: any) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.layout}>
      <Text style={styles.title}>What is this app about?</Text>
      <Text style={{ padding: 20 }}>
        <Text>
        Traditionally DTU students were handed a physical version of the handbook called "Rusbogen."
        The primary purpose of this app is to provide a more sustainable and accessible way for students 
        to look up important information regarding their studies. 
        Hence, remove the need to print a physical version of the handbook. 👏
        </Text>
      </Text>
      <Text style={{ fontStyle: "italic" }}>- Benjamin & Sam</Text>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "text-page-background-color",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  normal: {
    fontSize: 12,
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
