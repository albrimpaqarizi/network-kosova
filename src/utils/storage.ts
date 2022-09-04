import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};
export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

export const storeStorageData = async (key: string, value: string | boolean | number) => {
  try {
    await AsyncStorage.setItem(key, value.toString());
    return true;
  } catch (e) {
    return false;
  }
};
