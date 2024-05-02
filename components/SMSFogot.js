import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function SMSForgot() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // Đếm lùi thời gian
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Xóa interval khi component bị hủy
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={tw`flex-1 bg-white p-5`}>
      <View style={tw` w-full`}>
        <View style={tw`flex justify-center items-center mt-5`}>
          <Image
            style={{ width: "200px", height: "200px" }}
            source={require("../public/sms.png")}
          />
        </View>
        <View style={tw``}>
          <Text style={tw` text-center`}>The code has been sent to</Text>
          <Text style={tw`text-[#38b000] text-center`}>+84 36 **** **7</Text>
        </View>
        <View style={tw`mt-5 flex gap-3 flex-row`}>
          <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
            <TextInput
              maxLength={1}
              keyboardType="numeric"
              style={tw`py-5 flex justify-center items-center text-xl pl-[38px]`}
            />
          </View>
          <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
            <TextInput
              maxLength={1}
              keyboardType="numeric"
              style={tw`py-5 flex justify-center items-center text-xl pl-[38px]`}
            />
          </View>{" "}
          <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
            <TextInput
              maxLength={1}
              keyboardType="numeric"
              style={tw`py-5 flex justify-center items-center text-xl pl-[38px]`}
            />
          </View>{" "}
          <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
            <TextInput
              maxLength={1}
              keyboardType="numeric"
              style={tw`py-5 flex justify-center items-center text-xl pl-[38px]`}
            />
          </View>
          {/* <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
                        <Text style={tw`py-5 flex justify-center items-center text-xl`}>7</Text>
                    </View>{" "}
                    <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl `}>
                        <Text style={tw`py-5 flex justify-center items-center text-xl`}>2</Text>
                    </View>{" "}
                    <View style={tw`bg-[#f4f7fe] flex-1 rounded-xl border-[1px] border-[#79ca53]`}>
                        <Text style={tw`py-5 flex justify-center items-center text-xl`}>0</Text>
                    </View> */}
        </View>
        <View style={tw`flex flex-row justify-center my-4`}>
          <Text style={tw``}>Resend code in </Text>
          <Text style={tw`text-[#79ca53]`}>{seconds}s</Text>
        </View>
        <View>
          <TouchableOpacity style={tw`py-2 bg-[#38b000] rounded-md my-5  `}>
            <Text style={tw`text-white text-center text-lg`}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
