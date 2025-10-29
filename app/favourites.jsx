import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { CharacterCard } from "../components/characterCard";
import useCharactersFetch from "../hooks/useCharactersFetch";
import { useFavourites } from "../hooks/useFavourites";

export default function Favourites() {
  const data = useCharactersFetch();

  const { state } = useFavourites();

  const characters = state.list;

  return (
    <View>
      {data.characters.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          
          <FlatList
            data={characters}
            keyExtractor={(character) => character.id}
            renderItem={({ item }) => (
              <CharacterCard character={item} favourite={true} />
            )}
          />
        </>
      )}
    </View>
  );
}
