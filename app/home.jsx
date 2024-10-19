import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Chart from "@/components/charts/Chart";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.replace("index");
        // navigation.goBack("/index");
    };
    const handleSettingPress = () => {
        navigation.navigate("settings");
    };

    // Simulate loading state for demonstration
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after 2 seconds
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [isLoading]);

    return isLoading ? (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <TouchableOpacity>
                <Link href={"/index"} className="mt-10 pl-3  ">
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
            <View className="flex items-center ">
                <View className="mt-8 ">
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

                <View className="w-full  mt-3">
                    <Chart title="24h Chart ">
                        <LineChart
                            data={data}
                            width={screenWidth}
                            height={256}
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            bezier
                            style={{
                                width: 300,
                                height: 256,
                                // backgroundColor: "white",
                                color: "black",
                                borderBottomColor: "black",
                            }}
                        />
                    </Chart>
                    <Chart title="Weekly Chart">
                        <LineChart
                            data={data}
                            width={screenWidth}
                            height={256}
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            bezier
                            style={{
                                width: 300,
                                height: 256,
                                // backgroundColor: "white",
                                color: "black",
                                borderBottomColor: "black",
                            }}
                        />
                    </Chart>
                </View>
            </View>
        </LinearGradient>
    );
};

const data = {
    // labels: ["0", "1", "2", "3", "4", "5"],
    // labels: "ppm",
    datasets: [
        {
            data: [500, 1000, 1500, 2000, 2500, 3000],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2, // optional
        },
    ],
    // legend: ["Rainy Days"], // optional
};

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,

    // backgroundColorL: "#ffffff",

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,

    useShadowColorFromDataset: false, // optional
};
export default Home;
