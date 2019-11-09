import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import PhoneCallSummary from "../components/PhoneCallSummary";
import { connect } from "react-redux";
import HeaderTitle from "../components/header/HeaderTitle";
import TrackingToggle from "../components/header/TrackingToggle";
import { getLastSavedData } from "../repositories/DataRepository";
import { formatDateRangeFromMillis } from "../utils/DateUtils";
import TrackingScreen from "./TrackingScreen";
import { material, systemWeights } from "react-native-typography";
import LocationSummary from "../components/LocationSummary";
import PhotoSummary from "../components/PhotoSummary";
import Colors from "../constants/Colors";
import { AppLoading, SplashScreen } from "expo";
import TextMessagesSummary from "../components/TextMessagesSummary";

class SummaryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle text="Blackout" />,
      headerRight: <TrackingToggle navigation={navigation} />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    };
  };

  componentDidMount() {
    getLastSavedData(data => this.props.loadLastData(data));
  }

  getDateRangeString = (startMillis, endMillis) => {
    return formatDateRangeFromMillis(startMillis, endMillis);
  };

  render() {
    let { startTime, endTime } = this.props;

    if (this.props.tracking) {
      return <TrackingScreen />;
    }

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.dateRangeWrapper}>
            <Text style={styles.dateRange}>
              {startTime !== null &&
                endTime !== null &&
                this.getDateRangeString(startTime, endTime)}
            </Text>
          </View>
          <TextMessagesSummary />
          <PhoneCallSummary />
          <PhotoSummary />
          <LocationSummary />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    startTime: state.data ? state.data.startTime : null,
    endTime: state.data ? state.data.endTime : null,
    tracking: state.tracking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLastData: data => {
      dispatch({
        type: "LOAD_LAST_DATA",
        payload: { data }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  contentContainer: {},
  dateRangeWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.dateRangeBackground
  },
  dateRange: {
    ...material.display1,
    ...systemWeights.thin,
    fontSize: 22
  }
});
