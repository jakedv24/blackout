import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import SummarySection from "./SummarySection";
import PhoneCallCard from "./PhoneCallCard";

const DATA = [
  {
    placed: true,
    contact: "Mom",
    startTime: "6:03pm",
    callLength: "23 min"
  },
  {
    placed: false,
    contact: "Ex Girl",
    startTime: "6:04pm"
  },
  {
    placed: true,
    contact: "Girlfriend",
    startTime: "6:05pm",
    callLength: "23 min"
  }
];

class PhoneCallSummary extends Component {
  state = {};

  getPhoneCallContent = () => {
    return (
      <FlatList
        data={DATA}
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
    return (
      <View>
        <SummarySection
          sectionTitle="Phone Calls"
          numItems={3}
          content={this.getPhoneCallContent()}
        ></SummarySection>
      </View>
    );
  }
}

export default PhoneCallSummary;

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
