import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import CardWrapper from "./CardWrapper";
import {
  formatDateRangeFromMillis,
  formatDateStringFromMillis,
  formatTimeStringFromMillis
} from "../utils/DateUtils";
import HorizontalRule from "./HorizontalRule";
import { material, systemWeights } from "react-native-typography";

const ValueWrapper = props => {
  return (
    <View style={styles.valueWrapper}>
      <Text style={styles.value}>{props.text}</Text>
    </View>
  );
};

class SummaryListCard extends Component {
  state = {};

  getDateRangeString = startMillis => {
    return `${formatDateStringFromMillis(startMillis)}`;
  };

  getTimeRangeString = (startMillis, endMillis) => {
    return `${formatTimeStringFromMillis(
      startMillis
    )} - ${formatTimeStringFromMillis(endMillis)}`;
  };

  render() {
    let { summary } = this.props;

    return (
      <CardWrapper>
        <View style={styles.contentWrapper}>
          <View style={styles.dateRangeWrapper}>
            <View>
              <Text style={styles.dateRange}>
                {this.getDateRangeString(summary.startTime)}
              </Text>
            </View>
            <View>
              <Text style={styles.dateRange}>
                {this.getTimeRangeString(summary.startTime, summary.endTime)}
              </Text>
            </View>
          </View>
          <HorizontalRule />
          <View style={styles.allValuesWrapper}>
            <ValueWrapper
              text={summary.numCalls ? `${summary.numCalls} Calls` : ""}
            />
          </View>
        </View>
      </CardWrapper>
    );
  }
}

export default SummaryListCard;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1
  },
  dateRangeWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateRange: {
    ...material.headline,
    ...systemWeights.light,
    fontSize: 18
  },
  allValuesWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  valueWrapper: {},
  value: {
    ...material.display1,
    ...systemWeights.light,
    fontSize: 18
  }
});
