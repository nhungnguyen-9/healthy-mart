import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginAndRegisterScreen from "../screens/LoginAndRegisScreen";
import Forgot from "../components/Forgot";
import SMSForgot from "../components/SMSFogot";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="SMSForgot">
      <Stack.Screen name="LoginAndRegisterScreen" component={LoginAndRegisterScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="SMSForgot" component={SMSForgot} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function BotTabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Loading") {
              iconName = focused ? "loading" : "home-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },


          tabBarActiveTintColor: "#70b9be",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Loading" component={LoadingScreen} />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

