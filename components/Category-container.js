import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../store/productSlice";

const CategoryContainer = ({ navigation, data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);
  const favorites = useSelector((state) => state.product.favorites);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      dispatch(
        addToCart({
          id: product.id,
          quantity: productInCart.quantity + 1,
        })
      );
    } else {
      dispatch(
        addToCart({
          id: product.id,
          quantity: 1,
        })
      );
    }
    navigation.navigate("Cart");
  };

  const handleAddToFavorites = (product) => {
    const isAlreadyFavorite = isProductInFavorites(product.id);
    if (isAlreadyFavorite) {
      dispatch(removeFromFavorites({ id: product.id }));
    } else {
      dispatch(addToFavorites({ id: product.id }));
    }
  };

  const isProductInFavorites = (productId) => {
    return favorites.some((product) => product.id === productId);
  };

  return (
    <View>
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={tw`grid grid-cols-2`}
      >
        {data &&
          data.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={tw`relative w-40 px-2 py-4 gap-2 rounded-md bg-white flex items-center justify-center mr-2`}
              onPress={() => navigation.navigate("Detail", product)}
            >
              <TouchableOpacity
                style={tw`absolute top-1 left-1`}
                onPress={() => handleAddToFavorites(product)}
              >
                <IonIcon
                  name={
                    isProductInFavorites(product.id)
                      ? "heart"
                      : "heart-outline"
                  }
                  size={20}
                  color={isProductInFavorites(product.id) ? "red" : "black"}
                />
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
              <TouchableOpacity
                style={tw`bg-slate-200 w-full py-2 rounded-md`}
                onPress={() => handleAddToCart(product)}
              >
                <Text style={tw`text-center font-semibold`}>
                  Add to cart
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;
