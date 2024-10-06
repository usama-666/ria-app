import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            {/* Link to the Settings page */}
            <Link href="/app" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go to App</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/settings" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go to Settings</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/scanned" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go to scanned</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/scanning" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go to scannikng</Text>
                </TouchableOpacity>
            </Link>
            <Link href="/home" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Go to home</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "blue",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
