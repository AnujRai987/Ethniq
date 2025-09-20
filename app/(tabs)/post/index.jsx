import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../assets/Colors";
import { router, useRouter } from "expo-router";

export default function StoryScreen() {
  const [title, setTitle] = useState("");
  const [materials, setMaterials] = useState("");
  const [techniques, setTechniques] = useState("");
  const [story, setStory] = useState("");
  // const router = useRouter()

  return (
    <SafeAreaProvider>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBox}>
            {/* Back arrow */}
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>AI Storytelling</Text>
        </View>

        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAca8UvxVZollux12tMYvDP_vg-ejdyT-oz7R_w5jFcaj9Y_do0tTwnOZqnVy6RWslN1T3ez4PYvoMXvRbp9I_Tp-TMz3urnz3fCW3gwRcsv0D8LhMPY_zJDU7v1mQQE6_xmffwrvVSC-1hSpTsjnPVHtDgNRJcD2iVVRaZ8lZldCP5EEYFTVUU5EQfoqZYoRqD6AvO1zTYR19eIeBQsVyd10G_XwHkJMfzPh8XkJRTN-AVam-xkTyhml8zLNQ25cNRf6ozj16Slug",
            }}
            style={styles.image}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Craft a compelling narrative for your creation using AI.
        </Text>

        {/* Form Inputs */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Craft Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Rajasthani wooden bowl"
            placeholderTextColor="#897561"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Materials Used</Text>
          <TextInput
            style={styles.input}
            placeholder="sheesham wood"
            placeholderTextColor="#897561"
            value={materials}
            onChangeText={setMaterials}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Techniques Applied</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Hand-carved with traditional motifs"
            placeholderTextColor="#897561"
            value={techniques}
            onChangeText={setTechniques}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Personal Story or Inspiration</Text>
          <TextInput
            style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
            multiline
            placeholder="e.g., Passed down through generations in my family"
            placeholderTextColor="#897561"
            value={story}
            onChangeText={setStory}
          />
        </View>

        {/* Generate Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={()=>router.push("/postpreview")}>   
            {/* it's not working */}
            <Text style={styles.buttonText}>Preview</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop:15,  //later will remove this ..this won't be responsive in other devices
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  iconBox: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 22,
    color: "#181411",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#181411",
    paddingRight: 48, // for spacing
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1.5,
    padding: 16,
  },
  image: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181411",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  inputWrapper: {
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#181411",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e0db",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: "#181411",
    backgroundColor: "#fff",
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: Colors.bttn,
    borderRadius: 12,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#181411",
    fontSize: 14,
    fontWeight: "700",
  },
  navBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f4f2f0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navIcon: {
    fontSize: 22,
    color: "#897561",
  },
});
