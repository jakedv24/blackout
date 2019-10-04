import React, { Component } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import HorizontalRule from "./HorizontalRule";

class SummarySection extends Component {
  state = {};
  render() {
    const { numItems, sectionTitle, content } = this.props;

    return (
      <View style={styles.summaryContainer}>
        <View style={styles.summaryHeader}>
          <Text style={styles.numItems}>{numItems}</Text>
          <Text style={styles.sectionHeader}>{sectionTitle}</Text>
        </View>
        <HorizontalRule color="black"></HorizontalRule>
        <View style={styles.contentContainer}>{content}</View>
      </View>
    );
  }
}

export default SummarySection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  summaryContainer: {
    padding: 15,
    backgroundColor: "#fff",
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: 10,
    marginHorizontal: 10
  },
  summaryHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  sectionHeader: {
    fontSize: 35,
    marginLeft: 15,
    fontFamily: Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "Roboto",
    fontWeight: "200",
    color: "#303030"
  },
  numItems: {
    fontSize: 35
  },
  contentContainer: {
    flex: 1
  }
});
