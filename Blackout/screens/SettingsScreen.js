import React from "react";
import { ExpoConfigView } from "@expo/samples";
import SettingLine from "../components/SettingLine";
import HorizontalRule from "../components/HorizontalRule";

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <SettingLine />;
}

SettingsScreen.navigationOptions = {
  title: "Setting"
};
