import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import TrackingToggle from "./header/TrackingToggle";
import { StyleSheet, Text } from "react-native";

class SettingLine extends Component {
  state = {};
  render() {
    const { sectionTitle } = this.props;
    return (
      <View>
        <TrackingToggle />
      </View>
    );
  }
}
export default SettingLine;
const styles = StyleSheet.create({
  settingName: {
    fontWeight: "bold"
  }
});
