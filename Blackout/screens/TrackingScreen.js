import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { TRACKING_STRING } from "../constants/FunnyString";

class TrackingScreen extends Component {
  state = {
    trackingString: "Started Tracking",
    fadeAnimation: new Animated.Value(1)
  };

  componentDidMount() {
    setInterval(() => {
      Animated.timing(this.state.fadeAnimation, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true
      }).start(() => {
        this.setState(
          {
            trackingString: this.getRandomTrackingString(),
            fadeAnimation: new Animated.Value(0)
          },
          () => {
            Animated.timing(this.state.fadeAnimation, {
              toValue: 1,
              duration: 2500,
              useNativeDriver: true
            }).start();
          }
        );
      });
    }, 8000);
  }

  getRandomTrackingString = () => {
    return TRACKING_STRING[Math.floor(Math.random() * TRACKING_STRING.length)];
  };

  render() {
    return (
      <View>
        <Animated.Text style={{ opacity: this.state.fadeAnimation || 1 }}>
          {this.state.trackingString}
        </Animated.Text>
      </View>
    );
  }
}

export default TrackingScreen;
