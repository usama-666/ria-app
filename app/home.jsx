import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.replace("app");
        // navigation.goBack("/index");
    };
    const handleSettingPress = () => {
        navigation.navigate("settings");
    };

    // Simulate loading state for demonstration
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false); // Set loading to false after 2 seconds
    //     }, 1000); // Adjust the time as needed

    //     return () => clearTimeout(timer); // Cleanup on unmount
    // }, []);

    return isLoading ? (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <TouchableOpacity>
                <Link href={"/index"} className="mt-10 bg-red-200 ">
                    <Ionicons name="arrow-back-sharp" size={40} color="white" />
                </Link>
            </TouchableOpacity>
            <View className="flex-1 flex justify-center  items-center">
                <Text className="text-3xl text-white ">Connecting ...</Text>
            </View>
        </LinearGradient>
    ) : (
        <LinearGradient
            colors={["#4B3D85", "#080C1C"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View className="mt-10 flex flex-row justify-between items-center px-4">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back-sharp" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather
                        name="settings"
                        size={30}
                        color="white"
                        onPress={handleSettingPress}
                    />
                </TouchableOpacity>
            </View>
            <View className="flex items-center gap-3">
                <View className="mt-10 ">
                    <Text className=" text-3xl font-bold text-white  text-center">
                        Ria App 1
                    </Text>
                    <Text className=" pt-5 text-lg font-bold text-white  text-center">
                        600ppm
                    </Text>
                </View>
                <View className="w-1/2 ">
                    <Link
                        href={"/settings"}
                        className="bg-[#38A043] text-white text-lg  rounded-full px-10 py-4 text-center  "
                    >
                        Good
                    </Link>
                </View>

                <View>
                    <Text className="text-white font-extrabold  text-lg ">
                        24 hr Chart
                    </Text>
                    <Text className="text-white font-extrabold  text-lg ">
                        Weekly Chart
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Home;
