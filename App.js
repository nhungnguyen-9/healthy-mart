
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

