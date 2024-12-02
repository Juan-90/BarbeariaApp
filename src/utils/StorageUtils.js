// src/utils/StorageUtils.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToStorage(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
}

export async function getFromStorage(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw error;
  }
}

export async function removeFromStorage(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
    throw error;
  }
}
