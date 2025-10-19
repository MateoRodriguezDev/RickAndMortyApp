import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import useCharactersFetch from "../hooks/useCharactersFetch";
import { CharacterCard } from "./characterCard";

export function Main() {
  const data = useCharactersFetch();

  const characters = data.characters;

  return (
    <View>
      {data.characters.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(character) => character.id}
          renderItem={({ item }) => <CharacterCard character={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
