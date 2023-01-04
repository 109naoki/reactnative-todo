import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import MemoList from "../components/MemoList";
import React, { useEffect } from "react";
import LogOutButton from "../components/LogOutButton";
export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />

      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate("MemoCreate");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
