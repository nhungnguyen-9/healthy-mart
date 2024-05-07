import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import tw from "twrnc";
import { color } from "../constant/color";
import { removeFromCart, updateQuantity } from "../store/productSlice";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
    const cart = useSelector((state) => state.product.cart);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => {
        const totalPrice = item.price * item.quantity;

        const handleIncreaseQuantity = () => {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
        };

        const handleDecreaseQuantity = () => {
            if (item.quantity > 1) {
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
            } else {
                dispatch(removeFromCart({ id: item.id }));
            }
        };

        const handleRemoveFromCart = () => {
            dispatch(removeFromCart({ id: item.id }));
        };

        return (
            <View style={tw`flex flex-row items-center justify-between border-b border-gray-300 py-2`}>
                <Image
                    source={item.image}
                    style={{ width: 80, height: 80, resizeMode: "contain" }}
                />
                <View style={tw`flex-1 ml-2`}>
                    <Text style={tw`font-semibold text-lg`}>{item.name}</Text>
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <View style={tw`flex flex-row items-center mt-2`}>
                            <TouchableOpacity
                                style={tw`px-3 py-1 bg-gray-200 rounded-full`}
                                onPress={handleDecreaseQuantity}
                            >
                                <Text style={tw`text-lg font-bold`}>-</Text>
                            </TouchableOpacity>
                            <Text style={tw`mx-2 text-lg`}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={tw`px-3 py-1 bg-gray-200 rounded-full`}
                                onPress={handleIncreaseQuantity}
                            >
                                <Text style={tw`text-lg font-bold`}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`font-semibold text-lg mt-5`}>{totalPrice}$</Text>
                    </View>
                </View>
                <TouchableOpacity style={tw`absolute top-3 right-0`} onPress={handleRemoveFromCart}>
                    <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        );
    };

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <View style={tw`flex flex-1 px-4 py-8`}>
            <Text style={tw`text-3xl font-bold mb-4`}>Cart</Text>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => (
                    <Text style={tw`text-lg text-center`}>Your cart is empty</Text>
                )}
            />
            <View style={tw`flex flex-row justify-between items-center mt-4`}>
                <Text style={tw`text-lg font-semibold`}>Total:</Text>
                <Text style={tw`text-lg font-semibold`}>{totalCost}$</Text>
            </View>
            <TouchableOpacity style={tw`px-6 py-4 bg-green-500 rounded-lg mt-4`}>
                <Text style={tw`text-center text-white text-md font-semibold`}>
                    Checkout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;
