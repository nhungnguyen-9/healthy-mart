import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import tw from "twrnc";
import ProductCard from "./product-card";

const CategoryContainer = ({ navigation, data }) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
      }}
      renderItem={({ item: product }) => (
        <ProductCard product={product} navigation={navigation} />
      )}
    />
  );
};

export default CategoryContainer;
