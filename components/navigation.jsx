import { Logo } from "../components/logo";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Pressable } from "react-native";

export default function Navigation() {
  return (
    <>
      <Logo className="ml-2" />

      <View className="ml-2 mb-2 flex-row space-x-2">
        <Link href="/" asChild>
          <Pressable>
            <FontAwesome name="home" size={35} color="black" />
          </Pressable>
        </Link>
        <Link href="/favourites" asChild>
          <Pressable>
            <MaterialIcons name="favorite" size={35} color="black" />
          </Pressable>
        </Link>
        <Link href="/" asChild>
          <Pressable>
            <AntDesign name="control" size={35} color="black" />
          </Pressable>
        </Link>
      </View>
    </>
  );
}
