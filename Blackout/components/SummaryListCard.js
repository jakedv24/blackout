import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import CardWrapper from "./CardWrapper";

class SummaryListCard extends Component {
  state = {};
  render() {
    return (
      <CardWrapper>
        <Text>{this.props.summary.startTime}</Text>
      </CardWrapper>
    );
  }
}

export default SummaryListCard;

const styles = StyleSheet.create({});
