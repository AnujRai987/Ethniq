import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";


export default function AuthScreen() {
  const [email_id, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Background Image */}
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={require("../assets/images/loginacc.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title & Subtitle */}
      <Text style={styles.title}>ETHNIQ</Text>
      <Text style={styles.subtitle}>
        Discover unique crafts from around the globe.
      </Text>

      {/* Buttons */}
      {/* <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <AntDesign name="google" size={20} color="#111717" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View> */}

      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Enter your Email"
                    value={email_id}
                    onChangeText={setEmailId}
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


      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Enter your Password"
                    value={password}
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
      

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
                    <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      

      {/* <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.phoneButton]}>
          <Feather name="phone" size={20} color="#111717" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View> */}

      <Text style={styles.orText}>or</Text>

      {/* Create an account */}

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.createButton]}>
		            <AntDesign name="google" size={20} color="#111717" style={{ marginRight: 8 }} />
                <Text style={styles.buttonText}>/ </Text>
		            <Feather name="phone" size={20} color="#111717" style={{ marginRight: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createButton]} onPress={()=>router.push("/signup")}>
          <Ionicons name="person-add" size={20} color="#111717" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>


      {/* Terms */}
      <Text style={styles.terms}>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  imageWrapper: {
    width: "100%",
    minHeight: 335,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111717",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#111717",
    textAlign: "center",
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
  },
  googleButton: {
    backgroundColor: "#bfb24f",
  },
  loginButton: {
    backgroundColor: "#bfb24f",
  },
  createButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffffffff",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111717",
  },
  orText: {
    color: "#648787",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 8,
  },
  terms: {
    color: "#648787",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
    marginVertical: 110,
    paddingHorizontal: 16,
  },
});
