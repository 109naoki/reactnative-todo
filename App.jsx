import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/components/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang={true}>World</Hello>
      <Hello bang={true} style={{ fontSize: 16 }}>
        Small World
      </Hello>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
