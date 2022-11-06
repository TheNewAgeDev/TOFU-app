import AsyncStorage from '@react-native-async-storage/async-storage'

const setStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    return false
  }
}

const getStorage = async (key) => {
  return await AsyncStorage.getItem(key)
}

const removeStorage = async (key) => {
  await AsyncStorage.removeItem(key)
}

const useStorage = () => {
  return {
    getStorage,
    setStorage,
    removeStorage
  }
}

export default useStorage
