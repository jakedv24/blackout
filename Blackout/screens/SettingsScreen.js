import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import SettingLine from "../components/SettingLine";
import HorizontalRule from "../components/HorizontalRule";
import { ScrollView } from "react-native-gesture-handler";

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <ScrollView>
      <View>
        <SettingLine sectionTitle="Phone Calls" />
        <HorizontalRule />
        <SettingLine sectionTitle="Text Messages" />
        <HorizontalRule />
        <SettingLine sectionTitle="Photos" />
        <HorizontalRule />
        <SettingLine sectionTitle="Location" />
        <HorizontalRule />
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "Setting"
};
