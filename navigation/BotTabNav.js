import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginAndRegisterScreen from "../screens/LoginAndRegisScreen";
import Forgot from "../components/Forgot";
import SMSForgot from "../components/SMSFogot";
import DetailScreen from "../screens/DetailScreen";
import CategoryScreen from "../screens/CategoryScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Category") {
              iconName = focused ? "apps" : "apps-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Favorite") {
              iconName = focused ? "heart" : "heart-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Category" component={CategoryStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Favorite" component={FavoriteStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const Home = () => {
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

      <Stack.Screen name="Auth" component={HomeStack} />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginAndRegisterScreen">
      <Stack.Screen
        name="LoginAndRegisterScreen"
        component={LoginAndRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="SMSForgot" component={SMSForgot} />
    </Stack.Navigator>
  );
};
