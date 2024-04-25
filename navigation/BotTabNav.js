import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
const Tab = createBottomTabNavigator();

export default function BotTabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        // } else if (route.name === 'Detail') {
                        //     iconName = focused ? 'cloudy' : 'cloudy-outline';
                        // } else if (route.name === 'Location') {
                        //     iconName = focused ? 'location' : 'location-outline';
                        // } else if (route.name === 'Setting') {
                        //     iconName = focused ? 'settings' : 'settings-outline';
                        // }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                    tabBarActiveTintColor: '#70b9be',
                    tabBarInactiveTintColor: 'gray'
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                {/* <Tab.Screen name="Detail" component={DetailScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

