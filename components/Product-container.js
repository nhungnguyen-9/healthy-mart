import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";

import PRODUCTS from "../data/productData";
import ProductCard from "./product-card";
const ProductContainer = ({ navigation, data }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const query = useSelector((state) => state.search.searchQuery);

  useEffect(() => {
    // Find products by query
    if (query && query.length > 0) {
      const regex = new RegExp(query.trim(), "i");

      const filtered = PRODUCTS.filter((product) => {
        return regex.test(product.name);
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  if (filteredProducts.length > 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={filteredProducts}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={tw`flex flex-col items-center justify-center`}
          renderItem={({ item: product }) => (
            <ProductCard product={product} navigation={navigation} />
          )}
        ></FlatList>
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        {data &&
          data.map((item, index) => (
            <View key={index}>
              <View style={tw`flex flex-row items-center justify-between py-4`}>
                <Text style={tw`text-xl font-bold`}>Fresh {item.title}</Text>
                <Text
                  onPress={() => navigation.navigate("Category", item.products)}
                  style={tw`text-sm text-green-500`}
                >
                  See all
                </Text>
              </View>
              <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                  horizontal
                  data={item.products}
                  keyExtractor={(item, index) => index.toString()}
                  // contentContainerStyle={tw`flex flex-col items-center justify-center`}
                  renderItem={({ item: product }) => (
                    <ProductCard product={product} navigation={navigation} />
                  )}
                ></FlatList>
              </SafeAreaView>
            </View>
          ))}
      </View>
    );
  }
};

export default ProductContainer;
