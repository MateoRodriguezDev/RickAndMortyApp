import {
  View,
  Text,
} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function NoInternet() {



  return (
    <View className="flex justify-center items-center h-80">
      <AntDesign name="disconnect" size={50} color="red" />
      <Text className="font-extrabold text-red-600 text-2xl text-center">Lost Connection</Text>
    </View>
  );
}
