import { Colors } from "../assets/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("")
  const router=useRouter();

// sign method
    const signIn= async () =>{
      try {
        const userCredential= await signInWithEmailAndPassword(auth,email,password);
        console.log(userCredential);  //remove later
        if(userCredential.user.uid){
          console.log("Moving to home screen") // remove
          router.replace("/home");
        }  
      } catch (error) {
        console.log(error);
      }
    }
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


      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <TextInput
                    placeholder="Enter your Email"
                    value={email}
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
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

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
    aspectRatio:1,
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
