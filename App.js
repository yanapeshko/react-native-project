import React, { useCallback } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      console.log(onLayoutRootView);
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return <RegistrationScreen onLayout={onLayoutRootView} />;
}
