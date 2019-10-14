import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import SummaryScreen from "../screens/SummaryScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TrackingToggle from "../components/header/TrackingToggle";
import HeaderTitle from "../components/header/HeaderTitle";
import TrackingScreen from "../screens/TrackingScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const CalendarStack = createStackNavigator(
  {
    Calender: CalendarScreen
  },
  config
);

CalendarStack.navigationOptions = {
  tabBarLabel: "Past Parties",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"md-calendar"}
      activeTintColor={focused ? "red" : "green"}
    />
  )
};

CalendarStack.path = "";

const SummaryStack = createStackNavigator(
  {
    Summary: SummaryScreen,
    Tracking: TrackingScreen
  },
  config
);

SummaryStack.navigationOptions = {
  tabBarLabel: "Summary",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-beer"} />
};

SummaryStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    CalendarStack,
    SummaryStack,
    SettingsStack
  },
  {
    initialRouteName: "SummaryStack",
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle />,
      headerRight: <TrackingToggle />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    },
    tabBarOptions: {
      activeTintColor: "black"
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
