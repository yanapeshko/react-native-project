import React, { useState } from "react";
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

export default function RegistrationScreen() {
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

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container}>
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
          <Button title={"Login"} style={styles.btn} onPress={onLogin} />
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
  btn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    gap: 12,

    position: "absolute",
    height: 51,
    left: 16,
    right: 16,
    bottom: 113,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
