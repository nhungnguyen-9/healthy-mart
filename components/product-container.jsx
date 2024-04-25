import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const ProductContainer = ({ container }) => {
  return (
    <View>
      {container.map((item, index) => (
        <View key={index}>
          <View style={tw`flex flex-row items-center justify-between py-4`}>
            <Text style={tw`text-xl font-bold`}>{item.title}</Text>
            <Text style={tw`text-sm text-green-500`}>See all</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={tw`flex`}
            showsHorizontalScrollIndicator={false}
          >
            {item.products.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={tw`w-40 px-2 py-4 gap-2 rounded-md bg-white flex items-center justify-center mr-2`}
              >
                <Image
                  style={tw`w-24 h-24`}
                  source={require("/assets/promotion.png")}
                />
                <Text style={tw`font-semibold text-md`}>{product.title}</Text>
                <Text style={tw`text-sm text-gray-500`}>{product.weight}</Text>
                <Text style={tw`font-bold text-2xl`}>{product.price}</Text>
                <TouchableOpacity
                  style={tw`bg-slate-200 w-full py-2 rounded-md text-center font-semibold`}
                >
                  Add to cart
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default ProductContainer;
