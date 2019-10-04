import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class PhoneCallCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.cardWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="ios-call"
              size={32}
              color={this.props.placed ? "green" : "red"}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text>{this.props.contact}</Text>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>{this.props.startTime}</Text>
              <Text style={styles.subText}>{this.props.callLength}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PhoneCallCard;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 15,
    flex: 1,
    width: 150,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 1,
    marginVertical: 10,
    marginHorizontal: 10
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  iconWrapper: {},
  textWrapper: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10
  },
  subTextWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subText: {
    color: "grey",
    fontSize: 12
  }
});
