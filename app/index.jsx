import { useRouter } from "expo-router";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity ,Animated,Easing} from "react-native";
import { Colors } from "../assets/Colors";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect,useRef,useState } from "react";

export default function App() {
  const router=useRouter();
  const progress =useRef(new Animated.Value(0)).current;// progress bar initial value

  // for checking both conditions
const [authChecked, setAuthChecked] = useState(false);
const [authUser, setAuthUser] = useState(null);
const [progressDone, setProgressDone] = useState(false);


  useEffect(()=> {
    const loopAnimation =() =>{
      progress.setValue(0);
      Animated.timing(progress,{
        toValue:1,
        duration:1000,
        easing:Easing.linear,
        useNativeDriver:false,
      }).start(()=> {setProgressDone(true)}); //repeat
    };
    loopAnimation();

    //Firebase check in Background
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      setAuthUser(user);
      setAuthChecked(true);
    });
    
    return () => unsubscribe();
  },[]);

  // when both finished -> navigate
  useEffect(()=> {
    if(progressDone && authChecked){
      const currentUser =auth.currentUser;
      if(authUser || currentUser){
        router.replace("/home");
      }else{
        router.replace("/login")
      }
    }
  },[progressDone,authChecked]);


  // animation progress width (0% -> 100%)
  const progressWidth =progress.interpolate({
    inputRange:[0,1],
    outputRange:["0%","100%"],
  });

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
      
      {/* Bottom Progress Bar */}
      <View style={styles.bottomWrapper}>
        <View style={styles.progressBackground}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1/1.7,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold", // system bold font
    color: "#111717",
    textAlign: "center",
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400", // normal system font
    color: "#111717",
    textAlign: "center",
    paddingBottom: 12,
  },
  bottomWrapper: {
    padding: 18,
  },
  progressBackground: {
    backgroundColor: "#dce5e5",
    borderRadius: 4,
    overflow:"hidden",
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.bttn,
    borderRadius: 4,
    width: "100%",
  },

});
