import { useEffect, useReducer, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useFavourites } from "../hooks/useFavourites";

export default function CharacterView() {
  const { state, dispatch } = useFavourites();
  const [isFavorite, setIsFavorite] = useState(false);
  const character = state.activeCharacter;

  useEffect(() => {
    state.list.map((item) => {
      if (item.id === character.id) {
        setIsFavorite(true);
      }
    });
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch({ type: "add-item", payload: { item: character } });
    } else {
      dispatch({ type: "delete-item", payload: { id: character.id } });
    }
  };

  return (
    <View className="items-center p-6">
      <Image
        source={{ uri: character.image }}
        className="w-48 h-48 rounded-full border-4 border-slate-400 shadow-md"
      />

      <Text className="text-3xl font-extrabold text-slate-800 mt-4 text-center">
        {character.name}
      </Text>

      <TouchableOpacity
        onPress={toggleFavorite}
        className={`mt-4 px-5 py-2 rounded-full ${
          isFavorite ? "bg-red-500" : "bg-slate-500"
        }`}
      >
        <Text className="text-white text-xl font-semibold">
          {isFavorite ? "❤️ Remove from favorites" : "🤍 Add to favorites"}
        </Text>
      </TouchableOpacity>

      <View className="bg-white shadow-md rounded-2xl w-full p-6 mt-6 space-y-3">
        <Text className="text-lg text-slate-800">
          <Text className="font-semibold">Status:</Text>{" "}
          <Text
            className={`${
              character.status === "Alive"
                ? "text-green-500"
                : character.status === "Dead"
                  ? "text-red-500"
                  : "text-amber-500"
            }`}
          >
            {character.status}
          </Text>
        </Text>

        <Text className="text-lg text-slate-800">
          <Text className="font-semibold">Species:</Text> {character.species}
        </Text>

        <Text className="text-lg text-slate-800">
          <Text className="font-semibold">Gender:</Text> {character.gender}
        </Text>

        <Text className="text-lg text-slate-800">
          <Text className="font-semibold">Origin:</Text>{" "}
          {character.origin?.name}
        </Text>

        <Text className="text-lg text-slate-800">
          <Text className="font-semibold">Last seen at:</Text>{" "}
          {character.location?.name}
        </Text>
      </View>
    </View>
  );
}
