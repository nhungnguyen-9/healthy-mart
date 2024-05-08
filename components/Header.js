import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { color } from "../constant/color";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";

const Header = ({ navigation }) => {
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleSearchInput = (value) => {
    setQuery(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <View style={tw`w-full h-28 bg-white`}>
      <View style={tw`h-full flex items-end justify-around flex-row py-4`}>
        <TouchableOpacity
          style={tw`flex items-center justify-center`}
          onPress={() => navigation.navigate("Auth")}
        >
          <IonIcon
            name={!user ? "person-outline" : "person"}
            style={user && tw`text-green-500`}
            size={20}
          ></IonIcon>
        </TouchableOpacity>
        <View
          style={tw`flex items-center justify-center ${openSearch && "hidden"}`}
        >
          <Text style={tw`text-sm text-slate-500`}>Welcome to</Text>
          <Text
            style={tw`text-xl font-semibold text-[${color["primary-color"]}]`}
          >
            Healthy mart
          </Text>
        </View>
        {!openSearch ? (
          <TouchableOpacity onPress={() => setOpenSearch(true)}>
            <IonIcon name="search-outline" size={20}></IonIcon>
          </TouchableOpacity>
        ) : (
          <TextInput
            placeholder='Search for "Grocery"'
            onBlur={() => setOpenSearch(false)}
            style={tw`px-4 py-2 border rounded border-gray-300 w-48`}
            value={query}
            onChange={(e) => handleSearchInput(e.nativeEvent.text)}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
