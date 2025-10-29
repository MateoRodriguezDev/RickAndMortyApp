import { useEffect, useReducer, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useFavourites } from "../hooks/useFavourites";

export function CharacterCard({ character, favourite }) {
  const [isFavorite, setIsFavorite] = useState(favourite || false);
  const { dispatch } = useFavourites();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch({ type: "add-item", payload: { item: character } });
    } else {
      dispatch({ type: "delete-item", payload: { id: character.id } });
    }

  };

  return (
    <View className="bg-slate-300 rounded-2xl items-center p-4 mb-3">
      <Image
        source={{ uri: character.image }}
        className="w-40 h-40 rounded-full"
      />
      <View className="space-y-2 ">
        <Text className="text-center font-bold text-xl mt-2">
          {character.name}
        </Text>
        <Text
          className={`text-center font-semibold ${character.status === "Alive" ? "text-green-500" : character.status === "Dead" ? "text-red-500" : "text-amber-500"}`}
        >
          <Text className="text-black">Status: </Text>
          {character.status}
        </Text>
        <Text className="text-slate-700 text-center">
          <Text className="font-semibold">Species:</Text> {character.species}
        </Text>
        <Text className="text-slate-500 italic mt-2 text-center">
          Last seen: {character.location.name}
        </Text>
      </View>

      <TouchableOpacity
        onPress={toggleFavorite}
        className={`mt-4 px-4 py-2 rounded-full ${
          isFavorite ? "bg-red-500" : "bg-slate-500"
        }`}
      >
        <Text className="text-white font-semibold">
          {isFavorite ? "❤️" : "🤍"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
