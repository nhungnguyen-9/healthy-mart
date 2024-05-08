import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderCategory from "../components/header-category";
import tw from "twrnc";
import CategoryContainer from "../components/Category-container";

const CategoryScreen = ({ route, navigation }) => {
  const data = route.params;

  return (
    <ScrollView style={tw`flex-1 flex flex-col`}>
      <HeaderCategory />
      <CategoryContainer data={data} navigation={navigation} />
    </ScrollView>
  );
};

export default CategoryScreen;
