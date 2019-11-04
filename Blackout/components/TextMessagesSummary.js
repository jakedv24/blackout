import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import SummarySection from "./SummarySection";
import PhoneCallCard from "./TextMessagesCard";

class PhoneCallSummary extends Component {
  state = {};

  getTextMessageContent = () => {
    const { calls } = this.props;
    return (
      <FlatList
        data={texts}
        renderItem={({ item }) => (
          <PhoneCallCard
            style={styles.card}
            placed={item.placed}
            contact={item.contact}
          ></PhoneCallCard>
        )}
        keyExtractor={item => item.startTime}
        horizontal
      />
    );
  };

  render() {
    const { texts } = this.props;

    return (
      <View>
        <SummarySection
          sectionTitle="Text Messages"
          numItems={(texts ) || 0} // this is getting data from const texts?
          content={this.getTextMessageContent()}
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
