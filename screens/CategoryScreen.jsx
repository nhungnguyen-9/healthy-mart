import React from "react";
import { ScrollView, View } from "react-native";
import HeaderCategory from "../components/header-category";
import tw from "twrnc";
import ProductContainer from "../components/product-container";

const CategoryScreen = ({ navigation }) => {
  console.log(navigation);
  const container = [
    {
      title: "Fresh Fruits",
      products: [
        {
          title: "Fresh Orange",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Strawberry",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Red apple",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
      ],
    },
    {
      title: "Fresh Vegetables",
      products: [
        {
          title: "Broccoli",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Betternut squash",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Radishes",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
      ],
    },
    {
      title: "Best Deals",
      products: [
        {
          title: "Cheese Swiss",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Delicious Bread",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
        {
          title: "Radishes",
          weight: "500gm.",
          price: "14.29$",
          favorite: false,
          quantity: 1,
          image: "",
        },
      ],
    },
  ];
  return (
    <ScrollView style={[tw`flex flex-col bg-white w-full`]}>
      <HeaderCategory />
      <View style={tw`px-6 pb-12 pt-4 bg-gray-100`}>
        <ProductContainer container={container} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default CategoryScreen;
