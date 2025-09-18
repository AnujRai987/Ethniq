import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../assets/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section with Image */}
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={require("../assets/images/splashscreen.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title & Subtitle */}
      <Text style={styles.title}>ETHNIQ</Text>
      <Text style={styles.subtitle}>Authentic crafts. Global reach.</Text>

      {/*for moving to the next screen*/}
      <View>
        <TouchableOpacity onPress={()=> router.push("/login")} style={{alignItems:"center",backgroundColor:Colors.bttn,height:45,justifyContent:"center",marginLeft:"auto",marginRight:"auto",width:300,borderRadius:4}}>    
          <Text>Go to next</Text>
        </TouchableOpacity>
      </View>
      

      {/* Bottom Progress Bar */}
      <View style={styles.bottomWrapper}>
        <View style={styles.progressBackground}>
          <View style={styles.progressBar} />
        </View>
        <View style={styles.spacer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 2 / 3,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold", // system bold font
    color: "#111717",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400", // normal system font
    color: "#111717",
    textAlign: "center",
    paddingBottom: 12,
  },
  bottomWrapper: {
    padding: 16,
  },
  progressBackground: {
    backgroundColor: "#dce5e5",
    borderRadius: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#111717",
    borderRadius: 4,
    width: "100%",
  },
  spacer: {
    height: 20,
    backgroundColor: "#fff",
  },
});
