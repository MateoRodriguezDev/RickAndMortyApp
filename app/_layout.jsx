import { Slot } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Navigation from "../components/navigation";
import { FavouritesProvider } from "../context/FavouritesContext";
import NetInfo from "@react-native-community/netinfo";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        router.push("/noInternet");
      }

      if(state.isConnected){
        router.push("/")
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <FavouritesProvider>
        <Navigation />
        <Slot />
      </FavouritesProvider>
    </View>
  );
}
