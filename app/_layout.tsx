import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot, Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: "red",
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen name="index" />
            {/* <View style={styles.container}>
                <Slot />
            </View> */}
        </Stack>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
