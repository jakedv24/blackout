import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HorizontalRule from "./HorizontalRule";
import { material, systemWeights } from "react-native-typography";
import Colors from "../constants/Colors";

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
        {this.numItems !== 0 && <HorizontalRule color="black"></HorizontalRule>}
        <View style={styles.contentContainer}>{content}</View>
      </View>
    );
  }
}

export default SummarySection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  summaryContainer: {
    padding: 15,
    backgroundColor: "#fff",
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 15
  },
  summaryHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  sectionHeader: {
    color: "#303030",
    marginLeft: 15,
    ...material.display1,
    ...systemWeights.light
  },
  numItems: {
    ...material.display1,
    ...systemWeights.light
  },
  contentContainer: {
    flex: 1
  }
});
