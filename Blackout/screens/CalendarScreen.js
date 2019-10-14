import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import HeaderTitle from "../components/header/HeaderTitle";
import TrackingToggle from "../components/header/TrackingToggle";

class LinksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle text="Past Blackouts" />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    };
  };

  state = {};
  render() {
    return <ScrollView style={styles.container}></ScrollView>;
  }
}

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
