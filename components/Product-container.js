import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const ProductContainer = ({ container }) => {
  return (
    <View>
      {container.map((item, index) => (
        <View key={index}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 4 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: "#34D399" }}>See all</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {item.products.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: 160, paddingHorizontal: 8, paddingVertical: 12, borderRadius: 6, backgroundColor: "#FFF", flexDirection: "column", alignItems: "center", justifyContent: "center", marginRight: 8 }}
              >
                <Image
                  style={{ width: 96, height: 96 }}
                  source={require("../assets/promotion.png")}
                />
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{product.title}</Text>
                <Text style={{ fontSize: 14, color: "#718096" }}>{product.weight}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>{product.price}</Text>
                <TouchableOpacity
                  style={{ width: "100%", padding: 8, borderRadius: 6, backgroundColor: "#718096", marginTop: 8 }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 16, color: "#FFF", textAlign: "center" }}>Add to cart</Text>
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
