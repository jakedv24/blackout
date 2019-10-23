import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

// TODO remove when not mocking photos
const mockPhoto = require("../repositories/mockImages/drunkPeople.jpg");

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.photoWrapper}>
        <Image style={styles.image} source={mockPhoto} />
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
  }
});
