import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../store/productSlice";
import { useNavigation } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const ProductDetail = ({ data }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: data.id, quantity: productQuantity }));
    setProductQuantity(1);
    showMessage({
      message: "Added Product To Cart!",
      type: "success",
    });
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorites({ id: data.id }));
    showMessage({
      message: "Added Product To Favorite!",
      type: "success",
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: data.name });
  }, [navigation, data.name]);

  return (
    <ScrollView>
      <View
        id={data.id}
        style={tw`relative w-full flex items-center bg-[${color["primary-color"]}] rounded-br-full pt-12`}
      >
        <Image
          source={data.image}
          style={{
            width: 400,
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
          <View style={tw`flex flex-row gap-1 items-center justify-center`}>
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-green-500 font-bold`} />
            <IonIcon name="star" style={tw`text-gray-500 font-bold`} />
            <Text style={tw`text-sm`}>
              {data.rating} - {data.numReviews} reviews
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
          />
          <Text style={tw`text-xl font-semibold`}>{productQuantity}</Text>
          <IonIcon
            name="remove-circle-outline"
            size={40}
            style={tw`text-[${color["primary-color"]}]`}
            onPress={() =>
              productQuantity > 1 && setProductQuantity(productQuantity - 1)
            }
          />
        </View>

        <TouchableOpacity
          style={tw`px-6 py-4 bg-green-500 rounded-lg`}
          onPress={handleAddToCart}
        >
          <Text style={tw`text-center text-white text-md font-semibold`}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`px-6 py-4`} onPress={handleAddToFavorite}>
          <Text style={tw`text-center text-black text-md`}>
            Add to Favorite
          </Text>
        </TouchableOpacity>
      </View>

      <FlashMessage position="top" />
    </ScrollView>
  );
};

export default ProductDetail;
