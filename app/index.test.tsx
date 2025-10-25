import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import Index from "./index";

// Mock the mockData service
jest.mock("@/app/services/mockData", () => ({
  getRecentSauces: jest.fn(() => Promise.resolve([])),
}));

describe("Home Screen", () => {
  it("renders the header component", async () => {
    render(<Index />);

    await waitFor(() => {
      expect(screen.getByText("HotSauce AI")).toBeTruthy();
    });
  });

  it("renders the photo CTA card", async () => {
    render(<Index />);

    await waitFor(() => {
      expect(screen.getByText("Take a Photo")).toBeTruthy();
    });
  });
});
