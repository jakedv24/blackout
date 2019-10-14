import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
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
  tabBarLabel: "Blackouts",
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

const tabNavigator = createMaterialTopTabNavigator(
  {
    CalendarStack,
    SummaryStack,
    SettingsStack
  },
  {
    initialRouteName: "SummaryStack",
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle title="Blackout" />,
      headerRight: <TrackingToggle />,
      headerStyle: {
        style: { shadowColor: "transparent", fontFamily: "monospace" }
      }
    },
    tabBarOptions: {
      activeTintColor: "black",
      showIcon: true,
      showLabel: true,
      inactiveBackgroundColor: "#fff",
      activeBackgroundColor: "#fff",
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        width: 0
      }
    },
    tabBarPosition: "bottom"
  }
);

tabNavigator.path = "";

export default tabNavigator;
