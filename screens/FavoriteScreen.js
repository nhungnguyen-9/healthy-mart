import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/productSlice";

const FavoriteScreen = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.product.favorites);

    const handleRemoveFromFavorites = (productId) => {
        dispatch(removeFromFavorites({ id: productId }));
    };

    return (
        <ScrollView>
            <View style={tw`flex flex-col px-2 w-full h-full py-4`}>
                <Text style={tw`text-3xl font-bold mb-4`}>Favorites</Text>
                {favorites.length > 0 ? (
                    favorites.map((product, index) => (
                        <View
                            key={index}
                            style={tw`flex flex-row items-center justify-between border-b border-gray-300 py-2`}
                        >
                            <Image
                                source={product.image}
                                style={{ width: 80, height: 80, resizeMode: "contain" }}
                            />
                            <View style={tw`flex-1 ml-2`}>
                                <Text style={tw`font-semibold text-lg`}>{product.name}</Text>
                                <View style={tw`flex flex-row items-center justify-between`}>
                                    <Text style={tw`font-semibold text-lg`}>{product.price}$</Text>
                                    <TouchableOpacity
                                        onPress={() => handleRemoveFromFavorites(product.id)}
                                    >
                                        <IonIcon name="trash" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text style={tw`text-lg text-center`}>Your favorites list is empty</Text>
                )}
            </View>
        </ScrollView>
    );
};

export default FavoriteScreen;
