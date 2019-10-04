import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PhoneCallSummary from "../components/PhoneCallSummary";
import { connect } from "react-redux";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderSwitch from "../components/header/HeaderSwitch";

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
    this.props.loadLastData();
  }

  render() {
    return (
      <View style={styles.container}>
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadLastData: () => {
      dispatch({
        type: "LOAD_LAST_DATA",
        payload: {}
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
    paddingTop: 30
  }
});
