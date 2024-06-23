import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
  /**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
  static async getStoredString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
  static async saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}


/**
 * Removes a key from storage.
 *
 * @param key The key to kill.
 */
  static async remove(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

/**
 * Burn it all to the ground. useful for resetting the app's data
 */
  static async clear(): Promise<boolean> {
  try {
    await AsyncStorage.clear();
    return true;
  } catch {
    return false;
  }
}

}

