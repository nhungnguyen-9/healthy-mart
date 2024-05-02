import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function LoginAndRegisterScreen(props) {
    return (
        <View style={tw`bg-white p-5 flex-1 flex justify-center items-center`}>
            <View style={tw`w-full`}>
            <TouchableOpacity style={tw`flex justify-center items-center mt-5`} onPress={() => props.navigation.navigate("Home")}>
                <Image style={{ width: "500px", height: "300px" }} source={require("/public/login-and-regis.jpg")} />
            </TouchableOpacity>
                <Text style={tw`text-2xl text-center font-bold`}>Let's your in</Text>
                <View style={tw`flex flex-col gap-5 my-5`}>
                    <TouchableOpacity style={tw`w-full`}>
                        <View style={tw`bg-[#ea4235] p-2  rounded-xl flex flex-row gap-2 justify-center items-center`}>
                            <Ionicons name="logo-google" color={"#fff"} size={25}></Ionicons>
                            <Text style={tw`text-white`}>Connect using Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={tw`bg-[#1977f3] p-2  rounded-xl flex flex-row gap-2 justify-center items-center`}>
                            <Ionicons name="logo-facebook" color={"#fff"} size={25}></Ionicons>
                            <Text style={tw`text-white`}>Connect using Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={tw`bg-[#000000]  p-2  rounded-xl flex flex-row gap-2 justify-center items-center`}>
                            <Ionicons name="logo-apple" color={"#fff"} size={25}></Ionicons>
                            <Text style={tw`text-white`}>Connect using Apple</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tw`relative border-t border-[#a8a8a8] my-5`}>
                    <Text style={tw`absolute left-[45%] top-[-12px] bg-white px-3`}>Or</Text>
                </View>
                <TouchableOpacity style={tw`py-2 bg-[#38b000] rounded-md my-5 `} onPress={() => props.navigation.navigate("Login")}>
                    <Text style={tw`text-white text-center text-lg`}>Sign in with Email </Text>
                </TouchableOpacity>

                <View style={tw`flex flex-row gap-2 justify-center items-center`}>
                    <Text style={tw``}>Don't have an account?</Text>
                    <TouchableOpacity style={tw``}>
                        <Text style={tw`text-[#38b000] border-b-[1px] border-[#38b000]`} onPress={() => props.navigation.navigate("Register")}>
                            Create an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
