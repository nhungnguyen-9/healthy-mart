
import { Text, View, Image, ActivityIndicator } from 'react-native';
import 'react-native-gesture-handler'
import tw from 'twrnc'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Loading() {
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('On Boarding')
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

    return (

        <View>
            <Image source={require("../assets/logo-healthymart.png")} />

        <View style={tw`bg-[#004521] w-full h-full flex items-center justify-center`}>
            <Image source={require('../assets/logo-healthymart.png')} style={{ width: 220, height: 100 }} />
            <View style={tw`flex items-center`}>
                <Text style={tw`text-white font-bold text-5xl`}>Healthy</Text>
                <Text style={tw`text-white font-bold text-4xl `}>mart</Text>
            </View>
            <ActivityIndicator size="large" color="#00ff00" style={tw`mt-5`} />

        </View>
    );
}
