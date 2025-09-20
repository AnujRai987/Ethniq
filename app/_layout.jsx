import { HeaderShownContext } from "@react-navigation/elements";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useEffect } from "react";
import { timeout } from "../constants/timeout";

const MainLayout = () => {
  const {isAuthenticated,isNewUser} = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check wether user is authenticated or not 
    if (typeof isAuthenticated == 'undefined') return;

    const timer = setTimeout(() => {
      const inApp = segments[0] == '(tabs)';
      console.log(segments); //log
      console.log("Auth:", isAuthenticated, "NewUser:", isNewUser); //log

      if(isAuthenticated && isNewUser){
        router.replace('/role')
      }
      else if (isAuthenticated && !inApp) {
        router.replace('/home')
      }
      else if (isAuthenticated == false) {
        router.replace('/login');
      }
    },timeout.timeout);

    return () => clearTimeout(timer);
  }, [isAuthenticated,isNewUser])

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>

  );

}



// <SafeAreaProvider>
//   <Stack screenOptions={{headerShown:false}}>
//   <Stack.Screen
//   name="index"/>
//   <Stack.Screen
//   name="login"/>
//   <Stack.Screen
//   name="signup"/>
//   <Stack.Screen
//   name="role"/>
//   {/* <Stack.Screen
//   name="(tabs)"/> */}
//   </Stack>
// </SafeAreaProvider>
