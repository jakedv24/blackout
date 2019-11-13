import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import TrackingToggle from "./header/TrackingToggle";
import { StyleSheet, Text } from "react-native";
import { ThemeColors } from "react-navigation";
import HorizontalRule from "./HorizontalRule";

class SettingLine extends Component {
  state = {};
  render() {
    const { sectionTitle } = this.props;
    return (
      <View stlye={styles.contentWrapper}>
        <View stlye={styles.textWrapper}>
          <Text style={styles.settingName}>{sectionTitle}</Text>
        </View>
        <View stlye={styles.subToogleWrapper}>
          <TrackingToggle stlye={styles.toggle} />
        </View>
        <HorizontalRule />
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
    flexDirection: "column",
    marginLeft: 10
  },
  toggle: {
    alignSelf: "flex-end",
    flex: 1
  },
  subToogleWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
