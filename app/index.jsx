import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

import { Image } from "react-native";
// import React from "react";
// import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});
const index = () => {
    return (
        <LinearGradient
            colors={["#82C5F5", "#1545EF"]} // Gradient colors
            style={{ flex: 1 }} // Apply to cover the entire screen
        >
            <View style={styles.container}>
                <View className="  flex  justify-between items-center   py-10 flex-1">
                    <View className="flex    flex-row items-center gap-2 ">
                        <Image
                            source={require("@/assets/images/wirelism-logo.png")}
                            className="w-10 h-10 object-cover  "
                        />
                        <Text className="text-4xl text-white font-bold pt-2">
                            Wirelism
                        </Text>
                    </View>
                    <View className=" flex-1 justify-center">
                        <Feather name="bluetooth" size={70} color="white" />
                    </View>
                    <View className=" flex space-y-5 justify-center items-center w-full flex-1">
                        <View className="w-1/2 ">
                            <Text className="  font-bold text-white text-center">
                                Scan for nearby Ria Smart devices{" "}
                            </Text>
                        </View>
                        <Link
                            href="/scanning"
                            className="bg-white border-2 border-white w-2/3 text-center px-10 py-5 rounded-full 
               hover:bg-transparent hover:border-transparent 
               active:bg-transparent active:border-white  capitalize active:text-white"
                        >
                            Scan
                        </Link>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        width: "100%",
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

{
    /* <Text style={styles.title}>Home Screen</Text>

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
<Link href="home" asChild>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to home</Text>
    </TouchableOpacity>
</Link> */
}
