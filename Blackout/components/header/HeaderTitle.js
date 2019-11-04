import React, { Component } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { material, systemWeights } from "react-native-typography";

class HeaderTitle extends Component {
  state = {};
  render() {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{this.props.text}</Text>
      </View>
    );
  }
}

export default HeaderTitle;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingLeft: 20
  },
  headerText: {
    ...Platform.select({
      ios: {
        ...material.HeaderTitle,
        ...systemWeights.thin
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    }),
    fontSize: 32,
    fontWeight: "200"
  }
});
