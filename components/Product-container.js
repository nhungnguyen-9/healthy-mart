import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";

const ProductContainer = ({ navigation, data }) => {
  console.log("data: ", data);
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
            <ScrollView
              horizontal={true}
              style={tw`flex`}
              showsHorizontalScrollIndicator={false}
            >
              {item.products.length > 0 &&
                item.products.map((product, index) => (
                  <TouchableOpacity
                    key={index}
                    style={tw`relative w-40 px-2 py-4 gap-2 rounded-md bg-white flex items-center justify-center mr-2`}
                    onPress={() => navigation.navigate("Detail", product)}
                  >
                    <TouchableOpacity style={tw`absolute top-1.5 left-1.5`}>
                      <IonIcon name="heart-outline" size={20} />
                    </TouchableOpacity>
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        objectFit: "contain",
                      }}
                      source={product.image}
                    />
                    <Text style={tw`font-semibold text-lg`}>
                      {product.name}
                    </Text>
                    <Text style={tw`text-sm text-gray-500`}>
                      {product.quantity} {product.unit}
                    </Text>
                    <Text style={tw`font-bold text-2xl`}>{product.price}$</Text>
                    <TouchableOpacity
                      style={tw`bg-slate-200 w-full py-2 rounded-md`}
                    >
                      <Text style={tw`text-center font-semibold`}>
                        Add to cart
                      </Text>
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
