import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import ScrollCategory from "../components/Scroll-category";
import ProductContainer from "../components/Product-container";
import Promotion from "../components/Promotion";
import CATEGORIES from "../data/categoryData";
import PRODUCTS from "../data/productData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../constant/color";
import CategoryScreen from "./CategoryScreen";
import CartScreen from "./CartScreen";
import FavoriteScreen from "./FavoriteScreen";
import AllProductsScreen from "./AllProductScreens";

const Tab = createBottomTabNavigator();

const HomeTabScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const categories = ["All", "Vegetables", "Fruits", "Meats"];

  useEffect(() => {
    const groupProductsByCategory = (products, categories) => {
      const groupedProducts = {};

      // Initialize groupedProducts with empty arrays for each category
      categories.forEach((category) => {
        groupedProducts[category.name] = [];
      });

      // Populate groupedProducts with products
      products.forEach((product) => {
        const categoryName = categories.find(
          (category) => category.id === product.categoryId
        )?.name;
        if (categoryName) {
          groupedProducts[categoryName].push(product);
        }
      });

      // Convert groupedProducts object into array of objects with title and products
      const result = Object.entries(groupedProducts).map(
        ([title, products]) => ({
          title,
          products,
        })
      );

      return result;
    };

    const groupedProducts = groupProductsByCategory(PRODUCTS, CATEGORIES);
    setData(groupedProducts);
  }, []);

  return (
    <ScrollView style={[tw`flex flex-col bg-white w-full`]}>
      <Header navigation={navigation} />
      <View style={tw`px-6 pb-12 pt-4 bg-gray-100`}>
        <Promotion />
        <ScrollCategory categories={categories} />
        <ProductContainer data={data} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "All") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: '',
      })}
      tabBarOptions={{
        activeTintColor: color["primary-color"],
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Home" component={HomeTabScreen} options={{ headerShown: false }} />
      <Tab.Screen name="All" component={AllProductsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
