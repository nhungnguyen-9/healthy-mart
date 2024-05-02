import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
  {
    backgroundColor: "#fff",
    image: require("../assets/onboard/ob01-removebg-preview.png"),
    title: "Healthy Mart Grocery",
    subtitle: "Eat fresh fruits and vegetables and try to be healthy.",
  },
  {
    backgroundColor: "#fff",
    image: require("../assets/onboard/Build_Grocery_Shopping_App-removebg-preview.png"),
    title: "The Best Quality Grocery to You",
    subtitle: "Healthy mart store where we deliver everything on time.",
  },
  {
    backgroundColor: "#fff",
    image: require("../assets/onboard/hm2.png"),
    title: "Same Day Delivery Guaranteed",
    subtitle: "We deliver your orders fast and at your preferred time.",
  },
  {
    backgroundColor: "#fff",
    image: require("../assets/onboard/Healthy_Mart_-_Grocery_App___iOS_Ui_Kit_Figma_iOS_UI_Kit-removebg-preview.png"),
    title: "With seasonal discounts",
    subtitle: "We provide the best prices for our customers.",
  },
];

export default function OnBoarding() {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate("Home");
  };

  const handleDone = () => {
    navigation.navigate("Home");
  };

  const Done = ({ ...props }) => (
    <TouchableOpacity {...props} onPress={handleDone}>
      <Text style={{ fontSize: 16, marginHorizontal: 20 }}>Done</Text>
    </TouchableOpacity>
  );

  const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "#9DF01A" : "white";
    return (
      <View
        style={{
          width: 15,
          height: 6,
          marginHorizontal: 3,
          borderRadius: 20,
          backgroundColor,
        }}
      />
    );
  };

  return (
    <Onboarding
      pages={onboardingData.map((item, index) => ({
        ...item,
        image: (
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        ),
        key: index.toString(),
      }))}
      titleStyles={{
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: "-150px",
        marginLeft: 10,
        marginRight: 10,
      }}
      subTitleStyles={{
        fontSize: 16,
        textAlign: "center",
        color: "white",
        marginLeft: 5,
        marginRight: 5,
      }}
      controlStatusBar={true}
      bottomBarColor="#4FC824"
      imageContainerStyles={{ flex: 0.7 }}
      containerStyles={{ backgroundColor: "#4FC824" }}
      // controlContainerStyles={{ marginTop: 40 }}
      skipLabel="Skip"
      nextLabel="Next"
      showSkip={true}
      onSkip={handleSkip}
      DoneButtonComponent={Done}
      DotComponent={Dots}
    />
  );
}
