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
 * @returns Promise resolving to array of recent sauces (empty array if none)
 */
export async function getRecentSauces(): Promise<Sauce[]> {
  await delay(MOCK_DELAY_MS);

  const storedData = await AsyncStorage.getItem(STORAGE_KEY);

  if (storedData === null) {
    return [];
  }

  return JSON.parse(storedData) as Sauce[];
}

/**
 * Adds a new sauce to the beginning of the recent sauces list
 * @param sauce - The sauce to add
 */
export async function addMockSauce(sauce: Sauce): Promise<void> {
  await delay(MOCK_DELAY_MS);

  const existingSauces = await AsyncStorage.getItem(STORAGE_KEY);
  const sauces: Sauce[] = existingSauces !== null ? JSON.parse(existingSauces) : [];

  const updatedSauces = [sauce, ...sauces];

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSauces));
}

/**
 * Clears all sauces from AsyncStorage
 */
export async function clearSauces(): Promise<void> {
  await delay(MOCK_DELAY_MS);
  await AsyncStorage.removeItem(STORAGE_KEY);
}
