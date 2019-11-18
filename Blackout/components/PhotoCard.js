import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { formatTimeStringFromMillis } from "../utils/DateUtils";

class PhotoCard extends Component {
  state = {};
  render() {
    const { photo } = this.props;

    return (
      <View style={styles.photoWrapper}>
        <Image style={styles.image} source={{ uri: photo.url }} />
        <Text style={styles.timestamp}>
          {formatTimeStringFromMillis(photo.timestamp)}
        </Text>
      </View>
    );
  }
}

export default PhotoCard;

const styles = StyleSheet.create({
  photoWrapper: {
    marginRight: 12
  },
  image: {
    width: 220,
    height: 220,
    overflow: "hidden",
    borderRadius: 10
  },
  timestamp: {
    flex: 1,
    marginVertical: 5,
    color: "grey",
    fontSize: 12,
    textAlign: "right",
    marginRight: 3
  }
});
