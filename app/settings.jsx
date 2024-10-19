import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import * as Progress from "react-native-progress";
import Slider from "@react-native-community/slider"; // Import the correct Slider

const Settings = () => {
    const [progress, setProgress] = useState(800);
    // const navigation = new useNavigation();

    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.replace("index"); // Go back to the previous screen
    };

    const handleProgressChange = (value) => {
        setProgress(value); // Update progress based on slider value
        console.log(value, progress);
    };
    // const handleSliderInc = () => {
    //     if (progress < 3000) setProgress(progress + 500); // Update progress based on slider value
    // };
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
            <View className=" flex justify-between flex-1 items-center  ">
                <View className=" flex-1 justify-center">
                    <Text className=" text-3xl font-bold text-white  text-center">
                        Settings
                    </Text>
                    <Text className=" pt-5 text-lg font-bold text-white  text-center">
                        Set Device Name
                    </Text>

                    <Text className="bg-gray-400 mt-2  px-20 py-5 text-white rounded-full">
                        enter device name
                    </Text>
                </View>

                <View className="  ">
                    <Text className="text-white font-extrabold text-center text-xl ">
                        {progress}ppm
                    </Text>
                    <Text className="text-white font-extrabold  text-lg ">
                        Set Alert Threshold
                    </Text>
                </View>
                {/* Circular Progress */}
                {/* <View className="items-center">
                    <Progress.Circle
                        size={150}
                        progress={progress}
                        showsText={true}
                        color="white"
                        borderWidth={5}
                        thickness={8}
                    />
                </View> */}

                {/* Slider to update progress */}
                <View className="w-full  my-3  ">
                    <Text className="text-white font-extrabold text-center text-xl ">
                        3000ppm
                    </Text>
                    {/* <TouchableWithoutFeedback onPress={handleSliderInc}> */}
                    <View className="h-[300px] flex flex-row items-center justify-center">
                        <View
                            className="w-2/3  -rotate-90 "
                            // onPress={handleSliderInc}
                        >
                            <Slider
                                value={progress}
                                onValueChange={handleProgressChange}
                                minimumValue={500}
                                maximumValue={3000}
                                step={500}
                                minimumTrackTintColor="purple"
                                maximumTrackTintColor="gray"
                                thumbTintColor="white" // Color of the slider button (thumb)
                                style={{
                                    width: 250, // Increase the width of the progress bar
                                    height: 100, // Increase height to make it more visible
                                }}
                                thumbStyle={{
                                    width: 30, // Increase the size of the slider button (thumb)
                                    height: 30,
                                    borderRadius: 20, // Make the thumb circular
                                }}
                            />
                        </View>
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                    <Text className="text-white font-extrabold text-center text-xl ">
                        500ppm
                    </Text>
                </View>
                <View className=" flex-1  justify-center ">
                    <Link
                        href="/settings"
                        className="bg-white border-2 border-white  text-center px-20 py-5 rounded-full 
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
