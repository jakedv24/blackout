import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import SummarySection from "./SummarySection";
import { connect } from "react-redux";
import { Dimensions } from "react-native";

class LocationSummary extends Component {
  state = {};

  calculateViewableRegion = () => {
    const { locations } = this.props;

    let maxLon, minLon, maxLat, minLat;

    locations.forEach(coord => {
      const lat = parseFloat(coord.lat);
      const lon = parseFloat(coord.lon);
      if (lat > maxLat || !maxLat) {
        maxLat = lat;
      }
      if (lat < minLat || !minLat) {
        minLat = lat;
      }
      if (lon > maxLon || !maxLon) {
        maxLon = lon;
      }
      if (lon < minLon || !minLon) {
        minLon = lon;
      }
    });

    let viewBox = {
      latitude: (maxLat + minLat) / 2,
      longitude: (maxLon + minLon) / 2,
      latitudeDelta: maxLat - minLat + 0.0001,
      longitudeDelta: maxLon - minLon + 0.0001
    };

    return viewBox;
  };

  getLocationHistoryDistance = () => {
    return 3.1;
  };

  getLocationSummaryContent = () => {
    const { locations } = this.props;

    if (!locations || locations.length === 0) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={this.calculateViewableRegion()}
          scrollEnabled={false}
        />
      </View>
    );
  };

  render() {
    console.warn(window.height);

    return (
      <SummarySection
        sectionTitle="Location History"
        numItems={this.getLocationHistoryDistance()}
        content={this.getLocationSummaryContent()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.data ? state.data.locations : []
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSummary);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width - 30,
    height: 200
  }
});
