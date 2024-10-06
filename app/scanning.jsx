import {
    Image,
    Text,
    View,
    Animated,
    Easing,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";

const Scanning = () => {
    const navigation = useNavigation(); // Get navigation context
    // Create a reference for the animated value
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [isLoading, setIsLoading] = useState(true);

    // Animation function
    const startAnimation = () => {
        scaleAnim.setValue(1); // Reset to initial value
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2, // Scale to 1.2
                    duration: 500, // Duration of the animation
                    easing: Easing.linear, // Easing function
                    useNativeDriver: true, // Use native driver for better performance
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1, // Scale back to 1
                    duration: 500, // Duration of the animation
                    easing: Easing.linear, // Easing function
                    useNativeDriver: true, // Use native driver for better performance
                }),
            ]),
            { iterations: -1 } // Infinite loop
        ).start();
    };

    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    // Start the animation when the component mounts
    useEffect(() => {
        startAnimation();
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after 2 seconds
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);
    return isLoading ? (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View className="mt-10 px-4">
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons name="arrow-back-sharp" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <View className="flex-1 h-screen  flex items-center  gap-32  ">
                <View className="flex    flex-row items-center gap-2 ">
                    <Image
                        source={require("@/assets/images/wirelism-logo.png")}
                        className="w-10 h-10 object-cover  "
                    />
                    <Text className="text-4xl text-white font-bold pt-2">
                        Wirelism
                    </Text>
                </View>
                <View>
                    <Animated.View
                        style={{ transform: [{ scale: scaleAnim }] }}
                    >
                        <View className="bg-[#7DAAFF] p-8 rounded-full">
                            <Feather name="bluetooth" size={70} color="white" />
                        </View>
                    </Animated.View>
                </View>
                {/* <View className=" flex space-y-5 items-center w-1/2">
                    <View className="w-full ">
                        <Text className=" text-3xl font-bold text-white text-center">
                            Scanning.....
                        </Text>
                        <Link
                            href="/scanned"
                            className="text-lg p-2 border-2 border-white rounded-md text-center text-white"
                        >
                            go to scanned
                        </Link>
                    </View>
                </View> */}
            </View>
        </LinearGradient>
    ) : (
        <Redirect href="/scanned" />
    );
};

export default Scanning;
