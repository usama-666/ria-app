import { Image, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";

const App = () => {
    return (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View className="  flex items-center  gap-36 pt-10">
                <View className="flex    flex-row items-center gap-2 ">
                    <Image
                        source={require("@/assets/images/wirelism-logo.png")}
                        className="w-10 h-10 object-cover  "
                    />
                    <Text className="text-4xl text-white font-bold pt-2">
                        Wirelism
                    </Text>
                </View>
                <View className="">
                    <Feather name="bluetooth" size={70} color="white" />
                </View>
                <View className=" flex space-y-5 items-center w-1/2">
                    <View className="w-1/2 ">
                        <Text className="  font-bold text-white text-center">
                            Scan for nearby Ria Smart devices{" "}
                        </Text>
                    </View>
                    <Link
                        href="/scanning"
                        className="bg-white border-2 border-white w-2/3 text-center px-10 py-5 rounded-full 
               hover:bg-transparent hover:border-transparent 
               active:bg-transparent active:border-white  capitalize active:text-white"
                    >
                        Scan
                    </Link>
                </View>
            </View>
        </LinearGradient>
    );
};

export default App;
