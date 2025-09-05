import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function AuthScreen() {
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
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.phoneButton]}>
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or</Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.createButton]} onPress={()=>router.push("/signup")}>
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
    minHeight: 200,
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
    backgroundColor: "#19b3b3",
  },
  phoneButton: {
    backgroundColor: "#f0f4f4",
  },
  createButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#111717",
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
    marginVertical: 12,
    paddingHorizontal: 16,
  },
});
