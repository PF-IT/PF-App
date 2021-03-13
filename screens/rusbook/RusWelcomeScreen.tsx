import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Left } from "native-base";

export default function RusWelcome({ navigation }: any) {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.h1} category="h1">
          Welcome from PF
        </Text>
        <Text style={styles.text} category="p1">
          Dear new fellow students, welcome to the Technical University of
          Denmark(DTU)! Welcome to a world class engineering education and
          welcome to Polyteknisk Forening(PF), the student union at DTU.
        </Text>
        <Text style={styles.text} category="p1">
          You are now facing a lot of exciting, challenging, and not to forget,
          fun years at a university, which prepares you to solve the challenges
          of tomorrow. At DTU, your only limitation is your imagination.
        </Text>
        <Text style={styles.text} category="p1">
          You have been accepted to a world-class university with big
          expectations to its students. We as students likewise have big
          expectations to DTU. In Polyteknisk Forening, we work together to
          ensure that DTU is the best university possible.
        </Text>
        <Text style={styles.text} category="p1">
          PF is the oldest student association in Denmark, and we are still
          standing strong. We represent all students at DTU and work to ensure a
          good study environment. PF manages S-Huset which you can use as a
          place for studying or to grab a beer with your friends. Through PF,
          you can obtain a strong social and academic network, which can become
          a great asset in your career and make your time at the university
          fantastic. I hope that you will become a member and thereby ensure the
          voice of the students.
        </Text>
        <Text style={styles.text} category="p1">
          If you need help, you are always welcome to drop by our office at
          Lyngby Campus or Ballerup Campus or write us an email. We will happily
          help you.
        </Text>
        <Text style={styles.text} category="p1">
          I am looking forward to seeing, how you and your fellow students will
          impact DTU and PF.
        </Text>

        <Text style={styles.text} category="p1">
          Welcome to DTU and good luck with your studies! On behalf of
          Polyteknisk Forening. Søren Sandgaard President of PF
        </Text>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
  },
  h1: {
    color: "black",
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 23,
    alignSelf: "flex-start",
  },
});
