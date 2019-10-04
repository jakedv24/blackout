import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SummarySection from "../components/SummarySection";
import PhoneCallSummary from "../components/PhoneCallSummary";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <PhoneCallSummary />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
