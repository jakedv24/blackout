import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import SummarySection from "./SummarySection";
import PhoneCallCard from "./PhoneCallCard";

class PhoneCallSummary extends Component {
  state = {};

  getTextMessageContent = () => {
    const { calls } = this.props;
    return (
      <FlatList
        data={calls}
        renderItem={({ item }) => (
          <PhoneCallCard
            style={styles.card}
            placed={item.placed}
            contact={item.contact}
            startTime={item.startTime}
            callLength={item.callLength}
          ></PhoneCallCard>
        )}
        keyExtractor={item => item.startTime}
        horizontal
      />
    );
  };

  render() {
    const { calls } = this.props;

    return (
      <View>
        <SummarySection
          sectionTitle="Phone Calls"
          numItems={(calls && calls.length) || 0}
          content={this.getPhoneCallContent()}
        ></SummarySection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    calls: state.data ? state.data.calls : []
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneCallSummary);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5
  },
  card: {
    padding: 15,
    backgroundColor: "#fff",
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: 10,
    marginHorizontal: 10
  }
});
