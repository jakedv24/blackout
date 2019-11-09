import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";
import { SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import ModalPresenter from "./screens/ModalPresenter";

import { AppLoading, SplashScreen } from "expo";

const store = createStore(reducer);
store.subscribe(() => {});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else if (!isLoadingComplete) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("./assets/images/robot-prod.png")}
          onLoad={this._cacheResourcesAsync}
        />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar hidden />
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <ModalPresenter />
            <AppNavigator />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
