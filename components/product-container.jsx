import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";

const ProductContainer = ({ navigation, container }) => {
  return (
    <View>
      {container.map((item, index) => (
        <View key={index}>
          <View style={tw`flex flex-row items-center justify-between py-4`}>
            <Text style={tw`text-xl font-bold`}>{item.title}</Text>
            <Text
              onPress={() => navigation.navigate("Category")}
              style={tw`text-sm text-green-500`}
            >
              See all
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={tw`flex`}
            showsHorizontalScrollIndicator={false}
          >
            {item.products.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={tw`relative w-40 px-2 py-4 gap-2 rounded-md bg-white flex items-center justify-center mr-2`}
                onPress={() => navigation.navigate("Detail")}
              >
                <TouchableOpacity style={tw`absolute top-1 left-1`}>
                  <IonIcon name="heart-outline" size={20} />
                </TouchableOpacity>
                <Image
                  style={tw`w-24 h-24`}
                  source={require("../assets/promotion.png")}
                />
                <Text style={tw`font-semibold text-md`}>{product.title}</Text>
                <Text style={tw`text-sm text-gray-500`}>{product.weight}</Text>
                <Text style={tw`font-bold text-2xl`}>{product.price}</Text>
                <TouchableOpacity
                  style={tw`bg-slate-200 w-full py-2 rounded-md`}
                >
                  <Text style={tw`text-center font-semibold`}>Add to cart</Text>
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
