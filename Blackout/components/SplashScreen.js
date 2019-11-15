import React, { Component } from "react";
import { View, Text } from "react-native";

class SplashScreen extends Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: "orange" }];
    const textStyles = {
      color: "white",
      fontSize: 40,
      fontWeight: "bold"
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>Splash Screen</Text>
      </View>
    );
  }
}
