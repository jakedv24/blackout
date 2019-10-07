import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PhoneCallSummary from "../components/PhoneCallSummary";
import { connect } from "react-redux";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderSwitch from "../components/header/HeaderSwitch";
import { getLastSavedData } from "../repositories/DataRepository";

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
    paddingTop: 30
  }
});
