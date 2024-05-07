import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

import { TextInput, HelperText } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import USERS from "../data/userData";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
export default function Login(props) {
  const dispatch = useDispatch();

  const [eye, setEye] = React.useState(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidCredentials, setIsValidCredentials] = React.useState(true);
  const onChangeText = (text, setField) => setField(text);
  const hasErrors = () => {
    return email.length > 0 && !email.includes("@");
  };

  const handleSubmit = () => {
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );
    console.log("user: ", user);
    if (!user) return setIsValidCredentials(false);
    if (user) {
      dispatch(setUser(user));
      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={tw`bg-white p-5 flex-1 w-full`}>
      <View style={tw`flex justify-center items-center mt-5`}>
        <Image
          style={{ width: "200px", height: "200px" }}
          source={require("../public/login.png")}
        />
      </View>
      <Text style={tw`text-xl my-5 text-center font-bold`}>
        Login your account
      </Text>
      <View style={tw``}>
        <TextInput
          value={email}
          onChangeText={(e) => onChangeText(e, setEmail)}
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#38b000"
          label="Email address"
        />
        {!isValidCredentials && (
          <HelperText type="error" visible={!isValidCredentials}>
            Invalid Credentials
          </HelperText>
        )}
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
      </View>
      <View>
        <TextInput
          mode="outlined"
          outlineColor="#ccc"
          activeOutlineColor="#38b000"
          label="Password"
          value={password}
          onChangeText={(e) => onChangeText(e, setPassword)}
          secureTextEntry={eye}
          right={
            <TextInput.Icon
              icon={eye ? "eye-off" : "eye"}
              onPress={() => setEye(!eye)}
            />
          }
        />
        {!isValidCredentials && (
          <HelperText type="error" visible={!isValidCredentials}>
            Invalid credentials
          </HelperText>
        )}
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={tw`py-2 bg-[#38b000] rounded-md my-5  `}
      >
        <Text style={tw`text-white text-center text-lg`}>Login</Text>
      </TouchableOpacity>
      <View style={tw`relative border-t border-[#a8a8a8] my-5`}>
        <Text style={tw`absolute left-[45%] top-[-12px] bg-white px-3`}>
          Or
        </Text>
      </View>
      <View style={tw`flex flex-row justify-center gap-3 items-center my-5`}>
        <TouchableOpacity>
          <View
            style={tw`border-[1px] border-[#ccc] p-2 w-[50px] h-[50px]  rounded-xl flex justify-center items-center`}
          >
            <Ionicons name="logo-google" color={"#fbbc03"} size={25}></Ionicons>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={tw`border-[1px] border-[#ccc] p-2 w-[50px] h-[50px]  rounded-xl flex justify-center items-center`}
          >
            <Ionicons
              name="logo-facebook"
              color={"#1977f3"}
              size={25}
            ></Ionicons>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={tw`border-[1px] border-[#ccc] p-2 w-[50px] h-[50px]  rounded-xl flex justify-center items-center`}
          >
            <Ionicons name="logo-apple" color={"#000000"} size={25}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row gap-2 justify-center items-center`}>
        <Text style={tw``}>Don't have an account?</Text>
        <TouchableOpacity
          style={tw``}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={tw`text-[#38b000] underline`}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
