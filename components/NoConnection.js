import React, { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import tw from "twrnc"

export default function NoConnection() {
    return (
        <View style={tw`flex items-center justify-center mx-auto`}>
            <Image source={require("../assets/wi-fi.png")} style={{ width: 250, height: 250 }} />
            <Text style={tw`font-bold text-4xl my-3`}>There is a problem</Text>
            <Text style={tw`tracking-wider text-gray-500 my-3 text-center`}>Unfortunately, it was not possible to connect to the <br />Internet. Try again.</Text>
            <TouchableOpacity style={tw`bg-[#38B000] w-full py-4 rounded-lg my-2`}>
                <Text style={tw`text-white text-center text-xl`}>Reload</Text>
            </TouchableOpacity>
        </View >
    )
}
