import AsyncStorage from "@react-native-async-storage/async-storage";
import { getRecentSauces, addMockSauce, clearSauces } from "./mockData";
import type { Sauce } from "@/app/types/sauce";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Mock Data Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getRecentSauces", () => {
    it("should return empty array when no sauces are stored", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

      const sauces = await getRecentSauces();

      expect(sauces).toEqual([]);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("recent_sauces");
    });

    it("should return stored sauces from AsyncStorage", async () => {
      const mockSauces: Sauce[] = [
        {
          id: "1",
          name: "Fire Fang",
          heatLevel: 3,
          imageUrl: "https://example.com/sauce1.jpg",
        },
        {
          id: "2",
          name: "Inferno Blast",
          heatLevel: 5,
          imageUrl: "https://example.com/sauce2.jpg",
        },
      ];
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockSauces));

      const sauces = await getRecentSauces();

      expect(sauces).toEqual(mockSauces);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("recent_sauces");
    });

    it("should simulate API latency with mock delay", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

      const startTime = Date.now();
      await getRecentSauces();
      const endTime = Date.now();

      // Should take at least 200ms due to mock delay
      expect(endTime - startTime).toBeGreaterThanOrEqual(190);
    });

    it("should return empty array when AsyncStorage throws error", async () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error("Storage error"));

      const sauces = await getRecentSauces();

      expect(sauces).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error retrieving sauces from AsyncStorage:",
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });

    it("should return empty array when JSON parsing fails", async () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue("invalid json");

      const sauces = await getRecentSauces();

      expect(sauces).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe("addMockSauce", () => {
    it("should add a new sauce to empty storage", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

      const newSauce: Sauce = {
        id: "1",
        name: "Test Sauce",
        heatLevel: 2,
        imageUrl: "https://example.com/test.jpg",
      };

      await addMockSauce(newSauce);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "recent_sauces",
        JSON.stringify([newSauce])
      );
    });

    it("should prepend new sauce to existing sauces", async () => {
      const existingSauces: Sauce[] = [
        {
          id: "1",
          name: "Existing Sauce",
          heatLevel: 3,
          imageUrl: "https://example.com/existing.jpg",
        },
      ];
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(existingSauces));
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

      const newSauce: Sauce = {
        id: "2",
        name: "New Sauce",
        heatLevel: 4,
        imageUrl: "https://example.com/new.jpg",
      };

      await addMockSauce(newSauce);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "recent_sauces",
        JSON.stringify([newSauce, ...existingSauces])
      );
    });

    it("should simulate API latency with mock delay", async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

      const newSauce: Sauce = {
        id: "1",
        name: "Test",
        heatLevel: 1,
        imageUrl: "https://example.com/test.jpg",
      };

      const startTime = Date.now();
      await addMockSauce(newSauce);
      const endTime = Date.now();

      expect(endTime - startTime).toBeGreaterThanOrEqual(190);
    });

    it("should throw error when AsyncStorage.setItem fails", async () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
      (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error("Storage full"));

      const newSauce: Sauce = {
        id: "1",
        name: "Test",
        heatLevel: 1,
        imageUrl: "https://example.com/test.jpg",
      };

      await expect(addMockSauce(newSauce)).rejects.toThrow("Failed to save sauce data");
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error adding sauce to AsyncStorage:",
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });

    it("should throw error when AsyncStorage.getItem fails during add", async () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error("Storage error"));

      const newSauce: Sauce = {
        id: "1",
        name: "Test",
        heatLevel: 1,
        imageUrl: "https://example.com/test.jpg",
      };

      await expect(addMockSauce(newSauce)).rejects.toThrow("Failed to save sauce data");
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe("clearSauces", () => {
    it("should remove sauces from AsyncStorage", async () => {
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

      await clearSauces();

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("recent_sauces");
    });

    it("should simulate API latency with mock delay", async () => {
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

      const startTime = Date.now();
      await clearSauces();
      const endTime = Date.now();

      expect(endTime - startTime).toBeGreaterThanOrEqual(190);
    });

    it("should throw error when AsyncStorage.removeItem fails", async () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      (AsyncStorage.removeItem as jest.Mock).mockRejectedValue(new Error("Storage error"));

      await expect(clearSauces()).rejects.toThrow("Failed to clear sauce data");
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error clearing sauces from AsyncStorage:",
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });
  });
});
