import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class HorizontalRule extends Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: this.props.color,
          borderBottomWidth: this.props.width
            ? this.props.width
            : StyleSheet.hairlineWidth,
          marginVertical: 10
        }}
      ></View>
    );
  }
}

export default HorizontalRule;
