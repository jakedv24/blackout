import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardWrapper from "./CardWrapper";

class PhoneCallCard extends Component {
  state = {};
  render() {
    const { contact, startTime, callLength, placed } = this.props;
    return (
      <CardWrapper>
        <View style={styles.contentWrapper}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="ios-call"
              size={32}
              color={placed ? "green" : "red"}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.contactName} numberOfLines={1}>
              {contact}
            </Text>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>{startTime}</Text>
              <Text style={styles.subText}>{callLength}</Text>
            </View>
          </View>
        </View>
      </CardWrapper>
    );
  }
}

export default PhoneCallCard;

const styles = StyleSheet.create({
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
  contactName: {
    fontWeight: "bold"
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
