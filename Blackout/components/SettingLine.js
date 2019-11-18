import React, { Component } from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import SettingsToggle from "./SettingsToggle";
import HorizontalRule from "./HorizontalRule";

class SettingLine extends Component {
  state = {};
  render() {
    const { sectionTitle } = this.props;
    return (
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.settingName}>{sectionTitle}</Text>
        </View>
        <View style={styles.subToogleWrapper}>
          <HorizontalRule />
          <SettingsToggle />
        </View>
      </View>
    );
  }
}
export default SettingLine;
const styles = StyleSheet.create({
  settingName: {
    fontWeight: "bold",
    fontSize: 24
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between"
  },
  toggle: {
    alignSelf: "flex-end"
  },
  subToogleWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
