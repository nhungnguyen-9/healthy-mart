import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";
import { color } from "../constant/color";

const ProductDetail = ({ data }) => {
  return (
    <View style={tw`pb-64`}>
      <View style={tw`w-full h-full flex items-center justify-center my-8`}>
        <Image
          source={require("../assets/products/product-1.png")}
          style={tw`w-96 h-64`}
        />
      </View>
      <View style={tw`flex flex-col px-2 -my-12`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`font-bold text-4xl`}>Organic Spinach</Text>
          <Text style={tw`font-bold text-xl`}>14.29$</Text>
        </View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <View style={tw`flex flex-row gap-1`}>
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-gray-500 font-bold`} />
            <Text style={tw`text-sm`}>4.0 . 98 reviews</Text>
          </View>
          <Text style={tw`text-sm`}>500 gm.</Text>
        </View>
        <Text style={tw`mt-2 text-md text-gray-500`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptate vitae quas nisi vel temporibus, facilis quia nesciunt ea
          maxime fugiat commodi quidem aspernatur voluptatum omnis tenetur!
          Ratione, cumque debitis!
        </Text>
        <View style={tw`flex flex-row gap-2 items-center py-4`}>
          <IonIcon
            name="add-circle-outline"
            size={40}
            style={tw`text-[${color["primary-color"]}]`}
          ></IonIcon>
          <Text style={tw`text-xl font-semibold`}>01</Text>
          <IonIcon
            name="remove-circle-outline"
            size={40}
            style={tw`text-[${color["primary-color"]}]`}
          ></IonIcon>
        </View>

        <TouchableOpacity style={tw`px-6 py-4 bg-green-500 rounded-lg`}>
          <Text style={tw`text-center text-white text-md font-semibold`}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-6 py-4`}>
          <Text style={tw`text-center text-black text-md`}>
            Add to Favorite
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
