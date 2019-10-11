import React, { Component } from "react";
import { Switch } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { stopTracking } from "../../repositories/DataRepository";
import { getLastSavedData } from "../../repositories/DataRepository";
import {
  START_TRACKING_MODAL,
  STOP_TRACKING_MODAL
} from "../../constants/Modals";

class HeaderSwitch extends Component {
  state = {
    value: false
  };

  valueDidChange = value => {
    this.props.changeTracking(value);

    if (value) {
      this.animateStartTracking();
    } else {
      this.animateStopTracking();
    }
  };

  animateStartTracking = () => {
    this.props.presentModal(START_TRACKING_MODAL);
  };

  animateStopTracking = () => {
    this.props.presentModal(STOP_TRACKING_MODAL);
  };

  render() {
    return (
      <Switch onValueChange={this.valueDidChange} value={this.props.tracking} />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSwitch);
