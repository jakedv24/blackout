import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";

class HeaderSwitch extends Component {
  state = {
    value: false
  };

  valueDidChange = value => {
    // TODO set this up to start / stop tracking when changed
    this.setState({ value });

    if (value) {
    } else {
    }
  };

  render() {
    return (
      <Switch onValueChange={this.valueDidChange} value={this.state.value} />
    );
  }
}

export default HeaderSwitch;
