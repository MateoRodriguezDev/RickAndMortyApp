import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Main } from "./components/main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ marginHorizontal: 5 }}>
      <View>
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
