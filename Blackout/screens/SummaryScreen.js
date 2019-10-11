import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import PhoneCallSummary from "../components/PhoneCallSummary";
import { connect } from "react-redux";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderSwitch from "../components/header/HeaderSwitch";
import { getLastSavedData } from "../repositories/DataRepository";
import { formateDateStringFromMillis } from "../utils/DateUtils";

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />,
    headerRight: <HeaderSwitch />,
    headerStyle: {
      style: { shadowColor: "transparent", fontFamily: "monospace" }
    }
  };

  state = {};

  componentDidMount() {
    getLastSavedData()
      .then(data => {
        this.props.loadLastData(data);
      })
      .catch(err => console.log(err));
  }

  getDateRangeString = millis => {
    return millis ? formateDateStringFromMillis(millis) : "";
  };

  render() {
    let { startTime, endTime } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.dateRange}>{`${this.getDateRangeString(
          startTime
        )} to ${this.getDateRangeString(endTime)}`}</Text>
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
    endTime: state.data ? state.data.endTime : null
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
)(HomeScreen);

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
