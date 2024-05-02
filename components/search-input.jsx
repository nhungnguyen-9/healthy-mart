import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import IonIcon from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
const SearchInput = () => {
  return (
    <View
      style={tw`px-8 py-2 bg-white rounded-md flex flex-row items-center justify-center`}
    >
      {/* Icon */}
      <TouchableOpacity>
        <IonIcon name="search-outline" size={20} style={tw`mr-2`} />
      </TouchableOpacity>
      <TextInput placeholder="Tìm kiếm sản phẩm..." style={tw`w-full h-full`} />
    </View>
  );
};

export default SearchInput;
