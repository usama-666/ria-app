import {
    Image,
    Text,
    View,
    Animated,
    Easing,
    FlatList,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Link, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Scanned = () => {
    const navigation = useNavigation();
    const devices = [
        {
            id: 1,
            name: "Ria Smart 1",
            macAddress: "00:11:22:33:44:55",
            signalStrength: -60,
        },
        {
            id: 2,
            name: "Ria Smart 2",
            macAddress: "00:11:22:33:44:55",
            signalStrength: -60,
        },
        {
            id: 3,
            name: "Ria Smart 3",
            macAddress: "00:11:22:33:44:55",
            signalStrength: -60,
        },
    ];

    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };
    return (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View className="mt-10 px-4">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back-sharp" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View className="h-[550px] justify-between  flex items-center      ">
                <View className="flex w-full     items-center  ">
                    <Text className="text-4xl text-white font-bold pt-2">
                        Available Devices
                    </Text>
                    <View className="w-[90%]  ">
                        <SafeAreaView>
                            <FlatList
                                data={devices}
                                renderItem={({ item }) => <Item item={item} />}
                                keyExtractor={(item) => item.id}
                            />
                        </SafeAreaView>
                    </View>
                </View>
                <View className=" flex items-end w-1/2">
                    <View className="w-full ">
                        <Text className=" text-3xl font-bold text-white text-center">
                            Scanning.....
                        </Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Scanned;

const Item = ({ item }) => {
    return (
        <Link
            href={`/home`}
            className=" bg-[#A4C3FF] w-full px-3 py-3 rounded-2xl shadow-md my-1"
        >
            <View className="flex flex-row justify-between">
                <Text className="text-lg text-white ">{item.name}</Text>
                <Text className="text-white font-bold text-xl">
                    {item.signalStrength}
                </Text>
            </View>
            <View>
                <Text className="text-xs text-white">{item.macAddress}</Text>
            </View>
        </Link>
    );
};
