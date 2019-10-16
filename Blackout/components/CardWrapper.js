import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class CardWrapper extends Component {
  render() {
    return (
      <View style={{ ...styles.cardWrapper, ...this.props.styles }}>
        {this.props.children}
      </View>
    );
  }
}

export default CardWrapper;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 15,
    flex: 1,
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
  }
});
