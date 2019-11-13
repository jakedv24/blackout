import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import SettingLine from "../components/SettingLine";
import HorizontalRule from "../components/HorizontalRule";

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <SettingLine sectionTitle="Phone" />
      <HorizontalRule />
      <SettingLine sectionTitle="Text" />
      <HorizontalRule />
      <SettingLine sectionTitle="Photo" />
      <HorizontalRule />
      <SettingLine sectionTitle="Location" />
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "Setting"
};
