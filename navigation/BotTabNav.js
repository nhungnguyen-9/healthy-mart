import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

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
// import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   headerShown: false,
        // }}
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
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginAndRegisterScreen">
      <Stack.Screen
        name="LoginAndRegisterScreen"
        component={LoginAndRegisterScreen}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="SMSForgot" component={SMSForgot} />
    </Stack.Navigator>
  );
};
