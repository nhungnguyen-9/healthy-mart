import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import { color } from "../constant/color";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

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
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerStyle: {
            backgroundColor: color["primary-color"],
          },
          headerTintColor: "#fff",
          title: null,
          headerLeftLabelVisible: false,
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerStyle: {
            backgroundColor: color["primary-color"],
          },
          headerTintColor: "#fff",
          title: null,
          headerLeftLabelVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
