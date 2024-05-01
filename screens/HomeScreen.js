import React from "react";
import { View } from "react-native";
import Header from '../components/Header'
import tw from "twrnc";
import ScrollCategory from "../components/Scroll-category";
import ProductContainer from "../components/Product-container";
import Promotion from "../components/Promotion";

const HomeScreen = () => {
  const categories = ["All", "Vegetables", "Fruits", "Meats"];

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
    <View
      style={[
        tw`flex flex-col bg-white w-full h-full`,
        {
          minWidth: "100vw",
          minHeight: "100vh",
          overflow: "scroll",
        },
      ]}
    >
      <Header />
      <View style={tw`px-6 bg-gray-100`}>
        <Promotion />
        <ScrollCategory categories={categories} />
        <ProductContainer container={container} />
      </View>
    </View>
  );
};

export default HomeScreen;
