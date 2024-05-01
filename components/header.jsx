import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

// import Ionicons from "@expo/vector-icons/Ionicons";
const Header = () => {
  return (
    <View style={tw`w-full h-24 bg-white`}>
      {/* <IonIcon name="personal-outline" /> */}
      <View style={tw`h-full flex items-end justify-around flex-row py-4`}>
        <Text>Icon 1</Text>
        <View style={tw`flex items-center justify-center`}>
          <Text style={tw`text-sm text-slate-500`}>Welcome to</Text>
          <Text style={tw`text-xl font-semibold text-[#054A25]`}>
            Healthy mart
          </Text>
        </View>
        <Text>Icon 2</Text>
      </View>
    </View>
  );
};

export default Header;
