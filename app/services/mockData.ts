/**
 * Mock data service for hot sauce data
 * Uses AsyncStorage for persistence with simulated API latency
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Sauce } from "@/app/types/sauce";

const STORAGE_KEY = "recent_sauces";
const MOCK_DELAY_MS = 200; // Simulate API latency

/**
 * Simulates network delay
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retrieves recent sauces from AsyncStorage
 * @returns Promise resolving to array of recent sauces (empty array if none or on error)
 */
export async function getRecentSauces(): Promise<Sauce[]> {
  await delay(MOCK_DELAY_MS);

  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);

    if (storedData === null) {
      return [];
    }

    return JSON.parse(storedData) as Sauce[];
  } catch (error) {
    console.error("Error retrieving sauces from AsyncStorage:", error);
    return [];
  }
}

/**
 * Adds a new sauce to the beginning of the recent sauces list
 * @param sauce - The sauce to add
 * @throws Error if AsyncStorage operation fails
 */
export async function addMockSauce(sauce: Sauce): Promise<void> {
  await delay(MOCK_DELAY_MS);

  try {
    const existingSauces = await AsyncStorage.getItem(STORAGE_KEY);
    const sauces: Sauce[] = existingSauces !== null ? JSON.parse(existingSauces) : [];

    const updatedSauces = [sauce, ...sauces];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSauces));
  } catch (error) {
    console.error("Error adding sauce to AsyncStorage:", error);
    throw new Error("Failed to save sauce data");
  }
}

/**
 * Clears all sauces from AsyncStorage
 * @throws Error if AsyncStorage operation fails
 */
export async function clearSauces(): Promise<void> {
  await delay(MOCK_DELAY_MS);

  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing sauces from AsyncStorage:", error);
    throw new Error("Failed to clear sauce data");
  }
}
