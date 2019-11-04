import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardWrapper from "./CardWrapper";

class TextMessagesCard extends Component {
  state = {};
  render() {
    const { outgoing, contact, timestamp, message } = this.props;
    return (
      <CardWrapper style={styles.cardWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.iconWrapper}>
            <Ionicons name="ios-text" size={32} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.contactName} numberOfLines={1}>
              {contact}
            </Text>
            <View style={styles.subTextWrapper}>
              <Text style={styles.subText}>{message}</Text>
              <Text style={styles.subText}>{timestamp}</Text>
            </View>
          </View>
        </View>
      </CardWrapper>
    );
  }
}

export default TextMessagesCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 150
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
  }
});
