import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";

const CategoryContainer = ({ navigation, data }) => {
  console.log("data: ", data);
  return (
    <View>
      <ScrollView
        horizontal={false}
        style={tw`grid grid-cols-2`}
        showsHorizontalScrollIndicator={false}
      >
        {data &&
          data.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={tw`relative w-40 px-2 py-4 gap-2 rounded-md bg-white flex items-center justify-center mr-2`}
              onPress={() => navigation.navigate("Detail", product)}
            >
              <TouchableOpacity style={tw`absolute top-1 left-1`}>
                <IonIcon name="heart-outline" size={20} />
              </TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  height: 130,
                  objectFit: "contain",
                }}
                source={product.image}
              />
              <Text style={tw`font-semibold`}>{product.name}</Text>
              <Text style={tw`text-sm text-gray-500`}>
                {product.quantity} {product.unit}
              </Text>
              <Text style={tw`font-bold text-2xl`}>{product.price}$</Text>
              <TouchableOpacity style={tw`bg-slate-200 w-full py-2 rounded-md`}>
                <Text style={tw`text-center font-semibold`}>Add to cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;
