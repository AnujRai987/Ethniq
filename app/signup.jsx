import { router } from "expo-router";
import React, { useState } from "react";
import { Video } from "expo-av";
import { Colors } from "../assets/Colors";
import { auth, db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) router.replace("/home");
        } catch (error) {
            console.log(error)
            alert('signIn is failed :' + error)
        }
    }

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(db, "Users"), {
                Name: username,
                Email: email,
                Password: password
            });
            if (user) {router.replace("/home")};
        } catch (error) {
            console.log(error)
            alert('signUp is failed :' + error)
        }
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }}
            contentContainerStyle={{ flexGrow: 1, marginTop: 12 }}
        >

            {/* Image background with overlay and "Create account" */}
            <View>
                <Video
                    source={require("../assets/videos/createacc.mp4")}
                    style={{
                        height: 400,
                        borderRadius: 12,
                        overflow: "hidden",
                    }}
                    resizeMode="contain"
                    shouldPlay     // autoplay
                    isLooping      // loop forever
                    isMuted
                >
                </Video>
            </View>

            <View>
                <Text
                    style={{
                        color: "../assets/constants/primary_but",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginVertical: 8,
                        marginLeft: 20,
                        marginRight: 190,
                    }}
                >
                    {"Create an account"}
                </Text>
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
                        backgroundColor: Colors.bttn,
                        borderRadius: 12,
                        padding: 16,
                        alignItems: "center",
                    }}

                    onPress={signUp}
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
