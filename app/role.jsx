import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Video } from "expo-av";
import { router } from "expo-router";


export default function App() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={{marginTop:35}}>
                <Video
                    source={require("../assets/videos/createacc.mp4")}
                    style={{
                        height: 325,
                        width:"auto",
                        borderRadius: 12,
                        overflow: "hidden"
                    }}
                    resizeMode="cover"
                    shouldPlay     // autoplay
                    isLooping      // loop forever
                    isMuted  
                >
                </Video>
            </View>
        <Text style={styles.heading}>Choose your role</Text>
        <Text style={styles.subHeading}>
          Tell us how you’d like to use ETHNIQ.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=> router.replace("home")} >
            <Text style={styles.buttonText}>I'm an Artist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>I'm a Buyer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    fontFamily: "Plus Jakarta Sans",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  heading: {
    color: "#111717",
    fontSize: 28,
    marginTop:10,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  subHeading: {
    color: "#111717",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    marginTop:20,
    width: "90%",
    maxWidth: 480,
    alignSelf: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#BFB24F", // updated color
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 125,
    marginVertical: 5,
  },
  buttonText: {
    color: "#111717",
    fontSize: 16,
    fontWeight: "700",
  },
});
