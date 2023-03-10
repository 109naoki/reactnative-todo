import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
export default function LogOutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗しました");
      });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
  },
});
