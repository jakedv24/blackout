import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../Button";
import { connect } from "react-redux";
import Layout from "../../constants/Layout";
import {
  startTracking,
  stopTracking,
  getLastSavedData
} from "../../repositories/DataRepository";

class TrackingModal extends Component {
  state = {};

  componentDidMount() {
    startTracking();
  }

  modalStopTracking = () => {
    stopTracking(() => {
      getLastSavedData()
        .then(data => {
          this.props.loadLastData(data);
          this.props.changeTracking(false);
          this.props.dismissModal();
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    return (
      <View style={styles.modal}>
        <Text>start tracking modal</Text>
        <Button
          light
          text={"Stop Tracking"}
          onPress={() => this.modalStopTracking()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dismissModal: () => {
      dispatch({
        type: "DISMISS_MODAL",
        payload: {}
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
)(TrackingModal);

const styles = StyleSheet.create({
  modal: {
    zIndex: 0,
    width: Layout.window.width,
    height: Layout.window.height
  }
});
