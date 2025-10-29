import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('favorites', jsonValue);
  } catch (e) {
    console.log(e)
  }
};


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('favorites');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
};

export const deleteData = async () => {
  try {
    
    await AsyncStorage.removeItem('favorites');
  } catch (e) {
    console.log(e)
  }
};

