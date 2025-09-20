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
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmwWJgbm8H9hTFwfnFDo9q7BrzbBJ2rT3Ib8qX62eDrpjF32ivff-57W9uwmQMPNzGHMchE_n4uKfxYe1JARLqqKxMMY3d5l3n1nDAgiFNnsbbbRi1DaAlYP0UUkNSFsQHA-LvDDGt-TYWfmMpFR6EYzadYHuga3G-jX681kyF3p9jeW0XcHhXB8zES0_u0XeU_lPxEY1TW_cuwU7lxqtl-ipInc2eNM83RFvO8M7hNWSDPFx7clmA-DEWJUUqnuVqXJZWAnAUs8",
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>ArtisanCrafts</Text>
      </View>

      {/* Post Card */}
      <View style={styles.postCard}>
        <ImageBackground
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh7wGcgSYg6eJUGysi4upalBSE6zviA1Vt7aBRSwuyQChdJCzCIPpZt9i73Sb4oLFvWaNly0zmDofRIp9qpicV2f1xhHMmcQ_-z3QNfzIHEZjvTRSAPfoPN_mYO7KeNEhgaL3Ho6wV8CoH7LzyTh9fjmXz5WcxaOHEOYPsK56glJC1RI629xXQ32E6DHeYglpXVTiLI3oKoK1IUJD4OHWbp7QsAZOp2EzOvUd4BWQGECMXPK2bHbamrp1qhylYHK3-7ar45uPREw0",
          }}
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
