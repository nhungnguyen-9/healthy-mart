
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/BotTabNav";
import LoadingScreen from "./screens/LoadingScreen";

export default function App() {
  return (
    <LoadingScreen />
  );
}

