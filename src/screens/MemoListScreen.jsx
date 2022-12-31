import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import MemoList from "../components/MemoList";
import React from "react";
export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <MemoList />

      <CircleButton>＋</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
