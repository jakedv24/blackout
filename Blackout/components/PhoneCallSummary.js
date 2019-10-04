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
    startTime: "6:04pm",
    callLength: "23 min"
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

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
