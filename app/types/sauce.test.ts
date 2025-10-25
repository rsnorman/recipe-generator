import { isSauce, isValidHeatLevel } from "./sauce";

describe("Sauce Type Validation", () => {
  describe("isValidHeatLevel", () => {
    it("should return true for valid heat levels 1-5", () => {
      expect(isValidHeatLevel(1)).toBe(true);
      expect(isValidHeatLevel(2)).toBe(true);
      expect(isValidHeatLevel(3)).toBe(true);
      expect(isValidHeatLevel(4)).toBe(true);
      expect(isValidHeatLevel(5)).toBe(true);
    });

    it("should return false for heat levels outside 1-5 range", () => {
      expect(isValidHeatLevel(0)).toBe(false);
      expect(isValidHeatLevel(6)).toBe(false);
      expect(isValidHeatLevel(-1)).toBe(false);
      expect(isValidHeatLevel(10)).toBe(false);
    });

    it("should return false for non-integer values", () => {
      expect(isValidHeatLevel(2.5)).toBe(false);
      expect(isValidHeatLevel(NaN)).toBe(false);
    });
  });

  describe("isSauce", () => {
    it("should return true for valid sauce objects", () => {
      const validSauce = {
        id: "1",
        name: "Fire Fang",
        heatLevel: 3,
        imageUrl: "https://example.com/sauce.jpg",
      };
      expect(isSauce(validSauce)).toBe(true);
    });

    it("should return false for sauce with empty name", () => {
      const invalidSauce = {
        id: "1",
        name: "",
        heatLevel: 3,
        imageUrl: "https://example.com/sauce.jpg",
      };
      expect(isSauce(invalidSauce)).toBe(false);
    });

    it("should return false for sauce with invalid heat level", () => {
      const invalidSauce = {
        id: "1",
        name: "Fire Fang",
        heatLevel: 6,
        imageUrl: "https://example.com/sauce.jpg",
      };
      expect(isSauce(invalidSauce)).toBe(false);
    });

    it("should return false for sauce missing required fields", () => {
      expect(isSauce({ id: "1", name: "Test" })).toBe(false);
      expect(isSauce({ name: "Test", heatLevel: 3 })).toBe(false);
      expect(isSauce(null)).toBe(false);
      expect(isSauce(undefined)).toBe(false);
      expect(isSauce({})).toBe(false);
    });
  });
});
