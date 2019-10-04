import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class PhoneCallCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.cardWrapper}>
        <Ionicons
          name="ios-call"
          size={32}
          color={this.props.placed ? "green" : "red"}
        ></Ionicons>
        <Text>{this.props.startTime}</Text>
      </View>
    );
  }
}

export default PhoneCallCard;

const styles = StyleSheet.create({
  cardWrapper: {}
});
