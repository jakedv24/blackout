import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import SummarySection from "./SummarySection";
import PhotoCard from "./PhotoCard";

class PhotoSummary extends Component {
  state = {};

  getPhotosContent = photos => {
    return (
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        keyExtractor={item => item.url}
        horizontal
      />
    );
  };

  render() {
    const { photos } = this.props;

    return (
      <View>
        <SummarySection
          sectionTitle="Photos"
          numItems={(photos && photos.length) || 0}
          content={this.getPhotosContent(photos)}
        ></SummarySection>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    photos: state.data ? state.data.photos : []
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSummary);
