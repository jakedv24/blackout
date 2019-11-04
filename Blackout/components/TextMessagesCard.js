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
      <View>
        <CardWrapper style={styles.cardWrapper}>
          <View style={styles.contentWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons name="ios-text" size={32} />
            </View>
            <View style={styles.textWrapper}>
              <View style={styles.titleWrapper}>
                <Text style={styles.contactName}>{contact}</Text>
                <View>
                  <Text style={styles.subText}>
                    {formatTimeStringFromMillis(timestamp)}
                  </Text>
                </View>
              </View>
              <View style={styles.messageWrapper}>
                <Text style={styles.message} numberOfLines={5}>
                  {message}
                </Text>
              </View>
            </View>
          </View>
        </CardWrapper>
      </View>
    );
  }
}

export default TextMessagesCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 0
  },
  contentWrapper: {
    flexDirection: "row",
    alignSelf: "baseline"
  },
  iconWrapper: {},
  textWrapper: {
    flexDirection: "column",
    alignContent: "flex-start",
    marginLeft: 10,
    minWidth: 60
  },
  contactName: {
    fontWeight: "bold"
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 95
  },
  subText: {
    color: "grey",
    fontSize: 12
  },
  message: {
    flexWrap: "wrap"
  },
  messageWrapper: {
    maxWidth: 150,
    flexDirection: "row"
  }
});
