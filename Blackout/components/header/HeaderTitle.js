import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class HeaderTitle extends Component {
  state = {};
  render() {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Blackout</Text>
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
    fontFamily: "sans-serif-thin",
    fontSize: 32,
    fontWeight: "200"
  }
});
