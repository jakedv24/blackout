import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class PhoneCallCard extends Component {
  state = {};
  render() {
    const { contact, startTime, callLength, placed } = this.props;
    return (
      <View style={styles.cardWrapper}>
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
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#ffff",
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
