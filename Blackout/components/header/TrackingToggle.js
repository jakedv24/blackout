import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  stopTracking,
  startTracking,
  getAllSummaries
} from "../../repositories/DataRepository";
import { getLastSavedData } from "../../repositories/DataRepository";
import { Notifications } from "expo";

class TrackingToggle extends Component {
  state = {
    value: false
  };

  valueDidChange = value => {
    this.props.changeTracking(value);

    if (value) {
      startTracking();
      this.animateStartTracking();
    } else {
      stopTracking(() => {
        getLastSavedData()
          .then(data => {
            this.props.loadLastData(data);
            this.animateStopTracking();
            getAllSummaries(summaries => this.props.loadSummaries(summaries));
          })
          .catch(err => console.log(err));
      });
    }
  };

  animateStartTracking = () => {
    const notification = {
      title: "Blackout - Tracking",
      body: "We are tracking your every move...",
      android: {
        sticky: true
      }
    };
    Notifications.presentLocalNotificationAsync(notification);
  };

  animateStopTracking = () => {
    Notifications.dismissAllNotificationsAsync();
  };

  render() {
    return (
      <Switch
        style={styles.switch}
        onValueChange={this.valueDidChange}
        value={this.props.tracking}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tracking: state.tracking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    presentModal: modal => {
      dispatch({
        type: "CHANGE_MODAL",
        payload: { modal }
      });
    },
    changeTracking: tracking => {
      dispatch({
        type: "CHANGE_TRACKING",
        payload: { tracking }
      });
    },
    loadLastData: data => {
      dispatch({
        type: "LOAD_LAST_DATA",
        payload: { data }
      });
    },
    loadSummaries: summaries => {
      dispatch({
        type: "LOAD_SUMMARIES",
        payload: { summaries }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackingToggle);

const styles = StyleSheet.create({
  switch: {
    marginRight: 10
  }
});
