/**
 * Sauce type definitions and validation helpers
 */

export interface Sauce {
  id: string;
  name: string;
  heatLevel: 1 | 2 | 3 | 4 | 5;
  imageUrl: string;
}

/**
 * Validates if a heat level is within the valid range (1-5)
 * @param level - The heat level to validate
 * @returns True if the heat level is a valid integer between 1 and 5
 */
export function isValidHeatLevel(level: number): level is 1 | 2 | 3 | 4 | 5 {
  return Number.isInteger(level) && level >= 1 && level <= 5;
}

/**
 * Type guard to validate if an object is a valid Sauce
 * @param obj - The object to validate
 * @returns True if the object is a valid Sauce with all required fields
 */
export function isSauce(obj: unknown): obj is Sauce {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  const sauce = obj as Record<string, unknown>;

  return (
    typeof sauce.id === "string" &&
    typeof sauce.name === "string" &&
    sauce.name.trim().length > 0 &&
    typeof sauce.heatLevel === "number" &&
    isValidHeatLevel(sauce.heatLevel) &&
    typeof sauce.imageUrl === "string"
  );
}
