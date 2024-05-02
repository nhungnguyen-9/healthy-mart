import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import Loading from '../components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './OnBoardingScreen';
import HomeScreen from './HomeScreen';
import NetInfo from '@react-native-community/netinfo';
import NoConnection from '../components/NoConnection';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

const Stack = createStackNavigator()

export default function LoadingScreen() {
    const [connectionStatus, setConnectionStatus] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setConnectionStatus(state.isConnected);
        });
        return () => unsubscribe();
    }, []);

    return (
        <NavigationContainer>
            {/* <Provider> */}
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
                <Stack.Screen name="On Boarding" component={OnBoardingScreen} options={{ headerShown: false }} />
                {connectionStatus ? (
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="No Connection" component={NoConnection} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
            {/* </Provider> */}
        </NavigationContainer>
    );
}

