import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTitle from "../components/header/HeaderTitle";
import { getAllSummaries } from "../repositories/DataRepository";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import SummaryListCard from "../components/SummaryListCard";
import Colors from "../constants/Colors";

class CalendarScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle text="Past Blackouts" />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    };
  };

  state = {};

  componentDidMount() {
    getAllSummaries(summaries => {
      this.props.loadSummaries(summaries);
    });
  }

  getSummariesContent = () => {
    let { summaries } = this.props;
    summaries = summaries.sort((a, b) => a.startTime < b.startTime);

    return (
      <FlatList
        data={summaries}
        numColumns={1}
        renderItem={({ item }) => (
          <SummaryListCard summary={item} navigation={this.props.navigation} />
        )}
        keyExtractor={item => item.startTime.toString()}
      />
    );
  };

  render() {
    return <View style={styles.container}>{this.getSummariesContent()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    summaries: state.summaries ? state.summaries : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSummaries: summaries => {
      dispatch({
        type: "LOAD_SUMMARIES",
        payload: { summaries }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  }
});
