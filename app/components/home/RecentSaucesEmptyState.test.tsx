import React from "react";
import { render, screen } from "@testing-library/react-native";
import RecentSaucesEmptyState from "./RecentSaucesEmptyState";

describe("RecentSaucesEmptyState", () => {
  it("should render empty state message", () => {
    render(<RecentSaucesEmptyState />);

    expect(
      screen.getByText("Your recent sauces will appear here once you start scanning")
    ).toBeTruthy();
  });

  it("should render bottle icon", () => {
    render(<RecentSaucesEmptyState />);

    expect(screen.getByTestId("bottle-icon")).toBeTruthy();
  });

  it("should have accessible container", () => {
    render(<RecentSaucesEmptyState />);

    const container = screen.getByTestId("empty-state");
    expect(container.props.accessibilityLabel).toBe(
      "No sauces scanned yet. Take a photo to get started."
    );
  });
});
