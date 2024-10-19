import React from "react";
import { Text, View } from "react-native";
import { Slot } from "expo-router";
const Chart = ({ title, children }) => {
    return (
        <View className="w-5/6 overflow-hidden  mx-auto space-y-4">
            <Text className="text-white text-center font-extrabold  text-lg">
                {title}
            </Text>
            <View className="w-full   border-2 rounded-md border-slate-300  ">
                {children}
            </View>
        </View>
    );
};

export default Chart;
