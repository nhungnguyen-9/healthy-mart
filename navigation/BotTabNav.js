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
import StackNavigator from "./StackNavigator";

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
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
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
