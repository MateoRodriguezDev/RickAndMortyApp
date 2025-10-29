import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import useCharactersFetch from "../hooks/useCharactersFetch";
import { CharacterCard } from "./characterCard";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";

export function Main() {
  const data = useCharactersFetch();

  const characters = data.characters;


  const [valueStatus, setValueStatus] = useState("");
  const [valueGender, setValueGender] = useState("");

  useEffect(() => {
      data.getFilteredCharacters(`?status=${valueStatus}&gender=${valueGender}`)
    }, [valueGender, valueStatus]);

  const itemsStatus = [
    { label: "Alive", value: "alive" },
    { label: "Dead", value: "dead" },
    { label: "Unknown", value: "unknown" },
  ];

  const itemsGender = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Genderless", value: "genderless" },
    { label: "Unknown", value: "unknown" },
  ];

  return (
    <View>
      {data.characters.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <View className="space-y-4 my-3">
            <View>
              <Picker
                selectedValue={valueStatus}
                onValueChange={(itemValue) => setValueStatus(itemValue)}
              >
                <Picker.Item
                  label="Select the status of the character"
                  value={''}
                />
                {itemsStatus.map((item) => (
                  <Picker.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View>
              <Picker
                selectedValue={valueGender}
                onValueChange={(itemValue) => setValueGender(itemValue)}
              >
                <Picker.Item
                  label="Select the gender of the character"
                  value={''}
                />
                {itemsGender.map((item) => (
                  <Picker.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <FlatList
            data={characters}
            keyExtractor={(character) => character.id}
            renderItem={({ item }) => <CharacterCard character={item} />}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
