import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Application from "expo-application";
import { deleteData } from "../service/storeData";
import { useFavourites } from "../hooks/useFavourites";

export default function Profile() {
  const version = Application.nativeApplicationVersion || "1.0.0";
  const { dispatch } = useFavourites();

  const handleDeleteData = () => {
    deleteData()
    dispatch({ type: "delete-storage"});
  }

  return (
    <View className=" justify-center items-center bg-white dark:bg-gray-900 px-6 h-1/2">
      <Text className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-8">
        App's Version: {version}
      </Text>

      <TouchableOpacity className="w-52 py-3 bg-blue-500 dark:bg-blue-600 rounded-2xl mb-4">
        <Text className="text-center text-white font-semibold">
          Modo oscuro
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="w-52 py-3 bg-red-500 dark:bg-red-600 rounded-2xl" onPress={handleDeleteData}>
        <Text className="text-center text-white font-semibold">
          Eliminar datos
        </Text>
      </TouchableOpacity>
    </View>
  );
}
