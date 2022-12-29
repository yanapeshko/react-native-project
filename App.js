<script src="http://localhost:8097"></script>;
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const keybordHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeybord ? 32 : 43 }}
          >
            <TextInput
              value={name}
              onChangeText={nameHandler}
              placeholder="Username"
              style={styles.input}
              onFocus={() => setIsShowKeybord(true)}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setIsShowKeybord(true)}
            />
          </View>
          <Button title={"Login"} style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    textAlign: "center",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
