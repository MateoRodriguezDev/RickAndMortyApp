import { Slot } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Navigation from "../components/navigation";
import { FavouritesProvider } from "../context/FavouritesContext";

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <FavouritesProvider>
        <Navigation />
        <Slot />
      </FavouritesProvider>
    </View>
  );
}
