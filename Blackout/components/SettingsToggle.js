import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";

class SettingsToggle extends Component {
  state = {};
  render() {
    return (
      <Switch
        style={styles.switch}
        onValueChange={this.valueDidChange}
        value={true}
      />
    );
  }
}
export default SettingsToggle;
const styles = StyleSheet.create({
  switch: {
    marginRight: 10
  }
});
