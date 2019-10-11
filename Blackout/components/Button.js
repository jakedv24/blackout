import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Button extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={this.props.light ? styles.lightButton : styles.darkButton}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  darkButton: {
    backgroundColor: "black",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    height: 45,
    padding: 10
  },
  lightButton: {
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: "black",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 45,
    padding: 10
  }
});
