import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function Forgot() {
  return (
    <View style={tw`flex-1 bg-white p-5`}>
      <View style={tw` w-full`}>
        <View style={tw`flex justify-center items-center mt-5`}>
          <Image
            style={{ width: "200px", height: "200px" }}
            source={require("../public/fogget.png")}
          />
        </View>
        <View style={tw` flex justify-center items-center`}>
          <Text style={tw` text-center`}>
            Select which method do you want to reset your password
          </Text>
        </View>
        <View style={tw`mt-5 flex gap-3`}>
          <View
            style={tw`bg-gray-100 p-3 rounded-lg flex gap-3 flex-row items-center`}
          >
            <Ionicons
              size={25}
              name="phone-portrait-outline"
              style={tw`bg-[#9df01a] w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#3e521e]`}
            />
            <View>
              <Text style={tw`text-[#006401] `}>via SMS</Text>
              <Text style={tw``}>+84 3*** ***2</Text>
            </View>
          </View>
          <View
            style={tw`bg-gray-100 p-3 rounded-lg flex gap-3 flex-row items-center`}
          >
            <Ionicons
              size={25}
              name="mail-outline"
              style={tw`bg-[#9df01a] w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#3e521e]`}
            />
            <View>
              <Text style={tw`text-[#006401] `}>via Email</Text>
              <Text style={tw``}>john******@gmail.com</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={tw`py-2 bg-[#38b000] rounded-md my-5  `}>
            <Text style={tw`text-white text-center text-lg`}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
