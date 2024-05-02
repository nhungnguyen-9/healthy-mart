import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";

// import Ionicons from "@expo/vector-icons/Ionicons";
const Header = () => {
  return (
    <View style={tw`w-full h-28 bg-white`}>
      {/* <IonIcon name="personal-outline" /> */}
      <View style={tw`h-full flex items-end justify-around flex-row py-4`}>
        <TouchableOpacity>
          <Text>Icon 1</Text>
        </TouchableOpacity>
        <View style={tw`flex items-center justify-center`}>
          <Text style={tw`text-sm text-slate-500`}>Welcome to</Text>
          <Text
            style={tw`text-xl font-semibold text-[${color["primary-color"]}]`}
          >
            Healthy mart
          </Text>
        </View>
        <TouchableOpacity>
          <Text>Icon 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
