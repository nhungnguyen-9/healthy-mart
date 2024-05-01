import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import Loading from '../components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './OnBoardingScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator()

export default function LoadingScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
                <Stack.Screen name="On Boarding" component={OnBoardingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

