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
const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Profile" component={ProfileStack} /> */}
            <Tab.Screen name="Home" component={HomeStack} />
            {/* <Tab.Screen name="MachinesList" component={MachineListStack} /> */}
        </Tab.Navigator>
    );
}

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

// export default function BotTabNav() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarShowLabel: false,
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === "Login") {
//                             iconName = focused ? "person" : "person-outline";
//                         }
//                         // } else if (route.name === 'Detail') {
//                         //     iconName = focused ? 'cloudy' : 'cloudy-outline';
//                         // } else if (route.name === 'Location') {
//                         //     iconName = focused ? 'location' : 'location-outline';
//                         // } else if (route.name === 'Setting') {
//                         //     iconName = focused ? 'settings' : 'settings-outline';
//                         // }

//                         return <Ionicons name={iconName} size={size} color={color} />;
//                     },

//                     tabBarActiveTintColor: "#70b9be",
//                     tabBarInactiveTintColor: "gray",
//                 })}
//             >
//                 <Tab.Screen name="Login" component={LoginScreen} />
//                 {/* <Tab.Screen name="Register" component={RegisterScreen} /> */}
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 {/* <Tab.Screen name="Detail" component={DetailScreen} /> */}
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
