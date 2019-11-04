import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import SummarySection from "./SummarySection";
import TextMessagesCard from "./TextMessagesCard";

class TextMessagesSummary extends Component {
  state = {};

  getTextMessageContent = () => {
    const { texts } = this.props;
    return (
      <FlatList
        data={texts}
        renderItem={({ item }) => (
          <TextMessagesCard
            style={styles.card}
            timestamp={item.timestamp}
            contact={item.contact}
            message={item.message}
          />
        )}
        keyExtractor={item => item.timestamp + ""}
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
          numItems={texts ? texts.length : 0}
          content={this.getTextMessageContent()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    texts: state.data ? state.data.texts : []
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextMessagesSummary);

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
