import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { TRACKING_STRING } from "../constants/FunnyString";
import { material, systemWeights } from "react-native-typography";
import Colors from "../constants/Colors";

let timeInterval;

class TrackingScreen extends Component {
  state = {
    trackingString: "Started tracking you",
    fadeAnimation: new Animated.Value(1)
  };

  componentDidMount() {
    timeInterval = setInterval(() => {
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

  componentWillUnmount() {
    clearInterval(timeInterval);
  }

  getRandomTrackingString = () => {
    return TRACKING_STRING[Math.floor(Math.random() * TRACKING_STRING.length)];
  };

  render() {
    return (
      <View style={styles.loadingTextWrapper}>
        <Animated.Text
          style={[
            styles.loadingText,
            { opacity: this.state.fadeAnimation || 1 }
          ]}
        >
          {this.state.trackingString}
        </Animated.Text>
      </View>
    );
  }
}

export default TrackingScreen;

const styles = StyleSheet.create({
  loadingTextWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
    backgroundColor: Colors.backgroundColor
  },
  loadingText: {
    ...material.display3,
    ...systemWeights.regular,
    lineHeight: 75
  }
});
