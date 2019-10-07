import React, { Component } from "react";
import { Switch } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { startTracking } from "../../repositories/DataRepository";
import { stopTracking } from "../../repositories/DataRepository";
import { getLastSavedData } from "../../repositories/DataRepository";

class HeaderSwitch extends Component {
  state = {
    value: false
  };

  valueDidChange = value => {
    this.setState({ value });

    if (value) {
      startTracking();
    } else {
      stopTracking(() => {
        getLastSavedData()
          .then(data => {
            this.props.loadLastData(data);
          })
          .catch(err => console.log(err));
      });
    }
  };

  render() {
    return (
      <Switch onValueChange={this.valueDidChange} value={this.state.value} />
    );
  }
}

const mapStateToProps = () => {
  return {};
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
)(HeaderSwitch);
