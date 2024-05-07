import React from "react";
import { ScrollView, View } from "react-native";
import HeaderCategory from "../components/header-category";
import tw from "twrnc";
import CategoryContainer from "../components/Category-container";

const CategoryScreen = ({ route, navigation }) => {
  const data = route.params;
  console.log(data);

  return (
    <ScrollView style={[tw`flex flex-col bg-white w-full`]}>
      <HeaderCategory />
      <View style={tw`px-6 pb-12 pt-4 bg-gray-100`}>
        <CategoryContainer data={data} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default CategoryScreen;
