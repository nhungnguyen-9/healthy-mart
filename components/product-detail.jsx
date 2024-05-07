import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";
import IonIcon from "@expo/vector-icons/Ionicons";
const ProductDetail = ({ data }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <ScrollView>
      <View
        id={data.id}
        style={tw`relative w-full flex items-center bg-[${color["primary-color"]}] rounded-b-full pt-12`}
      >
        <Image
          source={data.image}
          style={{
            width: 300,
            height: 300,
            objectFit: "contain",
          }}
        />
      </View>

      <View style={tw`flex flex-col px-2 w-full h-full py-4`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`font-bold text-4xl`}>{data.name}</Text>
          <Text style={tw`font-bold text-xl`}>{data.price}$</Text>
        </View>
        <View style={tw`flex flex-row items-center justify-between mt-2`}>
          <View style={tw`flex flex-row gap-1`}>
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-gray-500 font-bold`} />
            <Text style={tw`text-sm`}>
              {data.rating} . {data.numReview} reviews
            </Text>
          </View>
          <Text style={tw`text-sm`}>
            {data.quantity} {data.unit}.
          </Text>
        </View>
        <Text style={tw`mt-2 text-lg text-gray-500`}>{data.description}</Text>
        <View style={tw`flex flex-row gap-2 items-center py-4`}>
          <IonIcon
            name="add-circle-outline"
            size={40}
            style={tw`text-[${color["primary-color"]}]`}
            onPress={() => setProductQuantity(productQuantity + 1)}
          ></IonIcon>
          <Text style={tw`text-xl font-semibold`}>{productQuantity}</Text>
          <IonIcon
            name="remove-circle-outline"
            size={40}
            style={tw`text-[${color["primary-color"]}]`}
            onPress={() =>
              productQuantity > 1 && setProductQuantity(productQuantity - 1)
            }
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
    </ScrollView>
  );
};

export default ProductDetail;
