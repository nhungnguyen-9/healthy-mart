import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const ScrollCategory = ({ categories, navigation }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={tw`py-4`}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          style={tw`px-4 py-2 bg-white rounded-md mr-4 flex flex-row items-center justify-center`}
          key={index}
        >
          <Text style={tw`text-black`}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ScrollCategory;
