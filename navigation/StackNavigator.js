import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import { color } from "../constant/color";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerStyle: {
            backgroundColor: color["primary-color"],
          },
          headerTintColor: "#fff",
          title: null,
          headerLeftLabelVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerStyle: {
            backgroundColor: color["primary-color"],
          },
          headerTintColor: "#fff",
          title: null,
          headerLeftLabelVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
