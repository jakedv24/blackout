import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import CardWrapper from "./CardWrapper";
import { formatDateRangeFromMillis } from "../utils/DateUtils";
import HorizontalRule from "./HorizontalRule";

class SummaryListCard extends Component {
  state = {};

  getDateRangeString = (startMillis, endMillis) => {
    return formatDateRangeFromMillis(startMillis, endMillis);
  };

  render() {
    let { summary } = this.props;
    console.warn(summary);

    return (
      <CardWrapper>
        <View style={styles.contentWrapper}>
          <View style={styles.dateRangeWrapper}>
            <Text style={styles.dateRange}>
              {this.getDateRangeString(summary.startTime, summary.endTime)}
            </Text>
          </View>
          <HorizontalRule />
          <View style={styles.valueWrapper}>
            <View style={styles.valueWrapper}>
              <Text style={styles.value}>
                {summary.numCalls ? summary.numCalls : ""}
              </Text>
            </View>
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
  dateRangeWrapper: {},
  dateRange: {}
});
