import React from "react";
import { View } from "react-native";
import ScrollCategory from "./Scroll-category";
import SearchInput from "./search-input";
import { color } from "../constant/color";
import tw from "twrnc";

const HeaderCategory = () => {
  const categories = ["All", "Vegetables", "Fruits", "Meats"];

  return (
    <View style={tw`bg-[${color["primary-color"]}] px-4 py-6 flex flex-col`}>
      <SearchInput />
      <ScrollCategory categories={categories} />
    </View>
  );
};

export default HeaderCategory;
