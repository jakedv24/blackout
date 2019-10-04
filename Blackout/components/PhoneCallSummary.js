import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import SummarySection from "./SummarySection";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

class PhoneCallSummary extends Component {
  state = {};

  getPhoneCallContent = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
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
