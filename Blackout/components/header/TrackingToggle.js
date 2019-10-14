import React, { Component } from "react";
import { Switch } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { stopTracking, startTracking } from "../../repositories/DataRepository";
import { getLastSavedData } from "../../repositories/DataRepository";

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
          })
          .catch(err => console.log(err));
      });
    }
  };

  animateStartTracking = () => {};

  animateStopTracking = () => {};

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
    },
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
)(TrackingToggle);
