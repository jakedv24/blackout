import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";

class SettingsToggle extends Component {
  state = {
    value: false
  };
  valueDidChange = value => {
    this.setState({ value });
    if (value) {
      value = false;
    } else {
      value = true;
    }
  };
  render() {
    return (
      <Switch
        style={styles.switch}
        onValueChange={this.valueDidChange}
        value={this.state.value}
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
