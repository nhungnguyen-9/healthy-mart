import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

const Header = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <View style={tw`w-full h-28 bg-white`}>
      <View style={tw`h-full flex items-end justify-around flex-row py-4`}>
        <TouchableOpacity
          style={tw`flex items-center justify-center`}
          onPress={() => navigation.navigate("Auth")}
        >
          <IonIcon
            name={!user ? "person-outline" : "person"}
            style={user && tw`text-green-500`}
            size={20}
          ></IonIcon>
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
          <IonIcon name="search-outline" size={20}></IonIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
