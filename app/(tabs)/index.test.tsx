import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { Alert } from "react-native";
import HomeScreen from "./index";
import * as mockDataService from "@/app/services/mockData";
import type { Sauce } from "@/app/types/sauce";

// Mock the mockData service
jest.mock("@/app/services/mockData");

// Mock Alert
jest.spyOn(Alert, "alert");

describe("HomeScreen", () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Component Rendering", () => {
    it("should render Header component", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByText("HotSauce AI")).toBeTruthy();
      });
    });

    it("should render PhotoCTACard component", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByText("Take a Photo")).toBeTruthy();
      });
    });

    it("should render RecentSaucesGrid component", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByText("Recent Sauces")).toBeTruthy();
      });
    });
  });

  describe("Data Fetching", () => {
    it("should fetch sauces on mount", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue(mockSauces);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(mockDataService.getRecentSauces).toHaveBeenCalledTimes(1);
      });
    });

    it("should display empty state when no sauces", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(
          screen.getByText("Your recent sauces will appear here once you start scanning")
        ).toBeTruthy();
      });
    });

    it("should display sauces when data is loaded", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue(mockSauces);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByText("Fire Fang")).toBeTruthy();
        expect(screen.getByText("Inferno Blast")).toBeTruthy();
      });
    });
  });

  describe("Interactions", () => {
    it("should show alert when take photo CTA is pressed", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByTestId("photo-cta")).toBeTruthy();
      });

      const photoCTA = screen.getByTestId("photo-cta");
      fireEvent.press(photoCTA);

      expect(Alert.alert).toHaveBeenCalledWith("Camera", "Camera functionality coming soon!");
    });

    it("should show alert when upload link is pressed", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByTestId("upload-link")).toBeTruthy();
      });

      const uploadLink = screen.getByTestId("upload-link");
      fireEvent.press(uploadLink);

      expect(Alert.alert).toHaveBeenCalledWith(
        "Upload",
        "Gallery upload functionality coming soon!"
      );
    });

    it("should show alert with sauce name when sauce card is pressed", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue(mockSauces);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByText("Fire Fang")).toBeTruthy();
      });

      const sauceCards = screen.getAllByTestId("sauce-card");
      fireEvent.press(sauceCards[0]);

      expect(Alert.alert).toHaveBeenCalledWith("Sauce Details", "Viewing Fire Fang");
    });

    it("should handle profile button press", async () => {
      (mockDataService.getRecentSauces as jest.Mock).mockResolvedValue([]);

      render(<HomeScreen />);

      await waitFor(() => {
        expect(screen.getByTestId("profile-button")).toBeTruthy();
      });

      const profileButton = screen.getByTestId("profile-button");
      fireEvent.press(profileButton);

      expect(Alert.alert).toHaveBeenCalledWith("Profile", "Profile screen coming soon!");
    });
  });
});
