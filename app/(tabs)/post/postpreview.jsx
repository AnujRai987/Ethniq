import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.headerTitle}>Post Preview</Text>
      </View>

      {/* Profile Row */}
      <View style={styles.profileRow}>
        <ImageBackground
          source={require('../../../assets/images/avtar.png')}
          style={styles.avatar}
        />
        <Text style={styles.username}>ArtisanCrafts</Text>
      </View>

      {/* Post Card */}
      <View style={styles.postCard}>
        <ImageBackground
          source={require("../../../assets/images/ppimg.png")}
          style={styles.postImage}
        />

        <Text style={styles.caption}>
          This handcrafted ceramic vase, with its earthy tones and unique texture,
          embodies the spirit of artisanal craftsmanship. Each curve and detail
          tells a story of dedication and skill, making it a perfect centerpiece for any home.
          #ArtisanCrafts #CeramicArt #HandmadeVase
        </Text>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>23 Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>5 Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  backArrow: { fontSize: 20 },
  headerTitle: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold" },

  profileRow: { flexDirection: "row", alignItems: "center", padding: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, overflow: "hidden" },
  username: { marginLeft: 10, fontSize: 16, fontWeight: "500" },

  postCard: { margin: 12, backgroundColor: "#fff", borderRadius: 12, overflow: "hidden", elevation: 2 },
  postImage: { width: "100%", height: 200 },
  caption: { padding: 12, fontSize: 14, color: "#333" },

  actions: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 },
  button: { padding: 8, backgroundColor: "#ec8013", borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "600" },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  navItem: { fontSize: 20 },
});
