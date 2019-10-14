import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { START_TRACKING_MODAL, STOP_TRACKING_MODAL } from "../constants/Modals";

class ModalPresenter extends Component {
  state = {};

  getDesiredModal = modal => {
    switch (modal) {
      case START_TRACKING_MODAL:
        return <View />;
      case STOP_TRACKING_MODAL:
        return (
          <View>
            <Text>stop modal</Text>
          </View>
        );
      default:
        return <View />;
    }
  };

  render() {
    let { modal } = this.props;
    return <View>{this.getDesiredModal(modal)}</View>;
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPresenter);
