import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";
import ProductDetail from "../components/product-detail";
const DetailScreen = () => {
  const data = { name: "abc" };
  return (
    <ScrollView>
      <View style={tw`h-64 bg-[${color["primary-color"]}] rounded-b-full`}>
        <ProductDetail data={data} />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
