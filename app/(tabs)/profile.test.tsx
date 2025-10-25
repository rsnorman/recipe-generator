import React from "react";
import { render, screen } from "@testing-library/react-native";
import ProfileScreen from "./profile";

describe("ProfileScreen", () => {
  it("should render coming soon message", () => {
    render(<ProfileScreen />);

    expect(screen.getByText("Profile")).toBeTruthy();
    expect(screen.getByText("Coming soon!")).toBeTruthy();
  });

  it("should render placeholder icon", () => {
    render(<ProfileScreen />);

    expect(screen.getByTestId("profile-icon")).toBeTruthy();
  });

  it("should have centered content", () => {
    render(<ProfileScreen />);

    const container = screen.getByTestId("profile-container");
    expect(container.props.style).toMatchObject(
      expect.objectContaining({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      })
    );
  });
});
