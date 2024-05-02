
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/BotTabNav";

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
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
=======
import React from 'react';
import LoadingScreen from './screens/LoadingScreen';

export default function App() {
  return (
    <>
      <LoadingScreen />
    </>
  );
}
