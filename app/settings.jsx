import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";

const Settings = () => {
    const navigation = new useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={["#4B3D85", "#080C1C"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View className="mt-10  px-4">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back-sharp" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View className="flex items-center gap-3">
                <View className="mt-10 ">
                    <Text className=" text-3xl font-bold text-white  text-center">
                        Settings
                    </Text>
                    <Text className=" pt-5 text-lg font-bold text-white  text-center">
                        Set Device Name
                    </Text>

                    <Text className="bg-gray-400  px-20 py-5 text-white rounded-full">
                        enter device name
                    </Text>
                </View>

                <View>
                    <Text className="text-white font-extrabold  text-lg ">
                        Set Alert Threshold
                    </Text>
                    <Text className="text-white font-extrabold text-center text-xl ">
                        1000ppm
                    </Text>
                </View>
                <View className="h-[200px]"></View>
                <View className=" ">
                    <Link
                        href="/settings"
                        className="bg-white border-2 border-white w-2/3 text-center px-20 py-5 rounded-full 
                        hover:bg-transparent hover:border-transparent 
                        active:bg-transparent active:border-white  capitalize active:text-white  "
                    >
                        Apply
                    </Link>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Settings;

const styles = StyleSheet.create({});
