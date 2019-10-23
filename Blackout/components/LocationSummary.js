import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import SummarySection from "./SummarySection";
import { connect } from "react-redux";
import { getDistanceFromCoordinates } from "../utils/LocationUtils";

const MAP_DELTA = 0.0005;

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
      latitudeDelta: maxLat - minLat + MAP_DELTA,
      longitudeDelta: maxLon - minLon + MAP_DELTA
    };

    return viewBox;
  };

  convertCoordinatesForDisplay = () => {
    let { locations } = this.props;

    locations = locations.map(coord => {
      let newCoord = {
        latitude: coord.lat,
        longitude: coord.lon
      };

      return newCoord;
    });

    return locations;
  };

  getLocationHistoryDistance = () => {
    return getDistanceFromCoordinates(this.props.locations);
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
        <View style={styles.mapContainer}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={this.calculateViewableRegion()}
            scrollEnabled={false}
          >
            <Polyline
              key={0}
              coordinates={this.convertCoordinatesForDisplay()}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={6}
            />
          </MapView>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SummarySection
        sectionTitle="Miles"
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
  mapContainer: {
    flex: 1,
    height: 210, // you can customize this
    width: "100%", // you can customize this
    alignItems: "center"
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject
  }
});
