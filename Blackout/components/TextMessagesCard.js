import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardWrapper from "./CardWrapper";
import { formatTimeStringFromMillis } from "../utils/DateUtils";

class TextMessagesCard extends Component {
  state = {};
  render() {
    const { contact, timestamp, message } = this.props;

    return (
      <CardWrapper style={styles.cardWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.iconWrapper}>
            <Ionicons name="ios-text" size={32} />
          </View>
          <View style={styles.textWrapper}>
            <View style={styles.subTextWrapper}>
              <Text style={styles.contactName} numberOfLines={1}>
                {contact}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, flexWrap: "wrap" }}>
                  {formatTimeStringFromMillis(timestamp)}
                </Text>
              </View>
            </View>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </CardWrapper>
    );
  }
}

export default TextMessagesCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1
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
  },
  message: {
    flex: 1,
    flexWrap: "wrap"
  }
});
