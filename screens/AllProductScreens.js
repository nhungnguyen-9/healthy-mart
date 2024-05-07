import React from "react";
import { ScrollView, View } from "react-native";
import HeaderCategory from "../components/header-category";
import tw from "twrnc";
import AllProducts from "../components/AllProducts";
import PRODUCTS from "../data/productData";

const AllProductsScreen = ({ navigation }) => {
    return (
        <ScrollView style={[tw`flex flex-col bg-white w-full`]}>
            <HeaderCategory />
            <View style={tw`px-6 pb-12 pt-4 bg-gray-100`}>
                <AllProducts navigation={navigation} data={PRODUCTS} />
            </View>
        </ScrollView>
    );
};

export default AllProductsScreen;
