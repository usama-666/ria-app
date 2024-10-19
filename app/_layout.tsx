import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const RootLayout = () => {
    return (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <Stack
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign: "center",
                    headerBackTitleVisible: false,
                    // headerStyle: {
                    //     backgroundColor: "red",
                    // },
                    // headerTintColor: "white",
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="app" />
                <Stack.Screen name="scanned" />
                <Stack.Screen name="scanning" />
                <Stack.Screen name="settings" />
                <Stack.Screen name="home" />
                {/* <View style={styles.container}>
                <Slot />
            </View> */}
            </Stack>
        </LinearGradient>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
