import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardWrapper from "./CardWrapper";
import { formatTimeStringFromMillis } from "../utils/DateUtils";

class PhoneCallCard extends Component {
  state = {};

  getCallTimestamp = time => {
    return formatTimeStringFromMillis(time);
  };

  render() {
    const { contact, timestamp, duration, placed } = this.props;
    return (
      <CardWrapper style={styles.cardWrapper}>
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
              <Text style={styles.subText}>
                {this.getCallTimestamp(timestamp)}
              </Text>
              <Text style={styles.subText}>{`${duration} MIN`}</Text>
            </View>
          </View>
        </View>
      </CardWrapper>
    );
  }
}

export default PhoneCallCard;

const styles = StyleSheet.create({
  cardWrapper: {
    minWidth: 175
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
