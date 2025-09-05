import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from "react-native";

export default function SignUpScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }}
            contentContainerStyle={{ flexGrow: 1, marginTop:12 }}
        >

            {/* Image background with overlay and "Create account" */}
            <View style={{ padding: 16 }}>
                <ImageBackground
                    source={require("../assets/images/createacc.png")}
                    style={{
                        height: 200,
                        justifyContent: "flex-end",
                        borderRadius: 12,
                        overflow: "hidden",
                    }}
                    imageStyle={{
                        borderRadius: 12,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "rgba(0,0,0,0.4)",
                            padding: 16,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                        }}
                    >
                        <View style={{ flex: 1, marginRight: 12 }}>
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 22,
                                    fontWeight: "bold",
                                }}
                            >
                                Create an account
                            </Text>
                            <Text style={{ color: "white", fontSize: 14, marginTop: 4 }}>
                                Join our community of artisans and craft enthusiasts.
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#19b3b3",
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ fontWeight: "bold", color: "#111717" }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            {/* Username Input */}
            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={{
                        backgroundColor: "#f0f4f4",
                        borderRadius: 12,
                        padding: 16,
                        fontSize: 16,
                        color: "#111717",
                    }}
                    placeholderTextColor="#648787"
                />
            </View>

            {/* Email Input */}
            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={{
                        backgroundColor: "#f0f4f4",
                        borderRadius: 12,
                        padding: 16,
                        fontSize: 16,
                        color: "#111717",
                    }}
                    placeholderTextColor="#648787"
                />
            </View>

            {/* Password Input */}
            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    style={{
                        backgroundColor: "#f0f4f4",
                        borderRadius: 12,
                        padding: 16,
                        fontSize: 16,
                        color: "#111717",
                    }}
                    placeholderTextColor="#648787"
                />
            </View>

            {/* Main Sign Up Button */}
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#19b3b3",
                        borderRadius: 12,
                        padding: 16,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#111717",
                        }}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <Text
                style={{
                    color: "#648787",
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 8,
                }}
            >
                Already have an account?
            </Text>
            <Text
                style={{
                    color: "#648787",
                    fontSize: 14,
                    textAlign: "center",
                    textDecorationLine: "underline",
                    marginBottom: 16,
                }}
            >
                Log in
            </Text>
        </ScrollView>
    );
}
