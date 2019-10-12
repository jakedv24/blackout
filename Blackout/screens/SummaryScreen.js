import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import PhoneCallSummary from "../components/PhoneCallSummary";
import { connect } from "react-redux";
import HeaderTitle from "../components/header/HeaderTitle";
import TrackingToggle from "../components/header/TrackingToggle";
import { getLastSavedData } from "../repositories/DataRepository";
import { formatDateRangeFromMillis } from "../utils/DateUtils";
import TrackingScreen from "./TrackingScreen";

class SummaryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle />,
      headerRight: <TrackingToggle navigation={navigation} />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    };
  };

  componentDidMount() {
    getLastSavedData()
      .then(data => {
        this.props.loadLastData(data);
      })
      .catch(err => console.log(err));
  }

  getDateRangeString = (startMillis, endMillis) => {
    return formatDateRangeFromMillis(startMillis, endMillis);
  };

  render() {
    let { startTime, endTime } = this.props;
    if (this.props.tracking) {
      return <TrackingScreen></TrackingScreen>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.dateRange}>
          {startTime !== null &&
            endTime !== null &&
            this.getDateRangeString(startTime, endTime)}
        </Text>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <PhoneCallSummary />
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
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  dateRange: {
    fontSize: 24,
    marginLeft: 15,
    marginTop: 10
  }
});
