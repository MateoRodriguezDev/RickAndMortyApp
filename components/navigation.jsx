import { Logo } from "../components/logo";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Pressable, Text } from "react-native";
import useCharactersFetch from "../hooks/useCharactersFetch";
import { useFavourites } from "../hooks/useFavourites";

export default function Navigation() {
  const data = useCharactersFetch();

  const { state } = useFavourites();

  const characters = state.list;

  return (
    <>
      <Logo className="ml-2" />

      <View className="ml-2 mb-2 flex-row justify-between">
        <View className="flex-row space-x-2">
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
          <Link href="/profile" asChild>
            <Pressable>
              <AntDesign name="control" size={35} color="black" />
            </Pressable>
          </Link>
        </View>
        <View className="flex-row space-x-2">
          <View className="flex-row">
            <Text className="text-center text-xl">{data.characters.length}</Text>
            <Ionicons name="people" size={25} color="black" />
          </View>

          <View className="flex-row">
            <Text className="text-center text-xl">{state.list.length}</Text>
            <MaterialIcons name="favorite" size={25} color="black" />
          </View>
        </View>
      </View>
    </>
  );
}
