import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";

export default function Loading() {
    return (
        <View>
            <Image source={require("../assets/logo-healthymart.png")} />
        </View>
    );
}
