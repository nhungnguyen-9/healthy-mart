import React from "react";
import { Image, View } from "react-native";
import tw from "twrnc";

const Promotion = () => {
  return (
    <View style={tw` flex items-center justify-center mt-2`}>
      <Image style={tw`w-80 h-32`} source={require("/assets/promotion.png")} />
    </View>
  );
};

export default Promotion;
