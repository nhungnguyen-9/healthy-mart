import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProductDetail from "../components/product-detail";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";
import { color } from "../constant/color";
const DetailScreen = () => {
  const data = { name: "abc" };
  return <ProductDetail data={data} />;
};

export default DetailScreen;
