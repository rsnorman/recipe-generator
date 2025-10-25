import React from "react";
import { render, screen } from "@testing-library/react-native";
import RecipesScreen from "./recipes";

describe("RecipesScreen", () => {
  it("should render coming soon message", () => {
    render(<RecipesScreen />);

    expect(screen.getByText("Recipes")).toBeTruthy();
    expect(screen.getByText("Coming soon!")).toBeTruthy();
  });

  it("should render placeholder icon", () => {
    render(<RecipesScreen />);

    expect(screen.getByTestId("recipes-icon")).toBeTruthy();
  });

  it("should have centered content", () => {
    render(<RecipesScreen />);

    const container = screen.getByTestId("recipes-container");
    expect(container.props.style).toMatchObject(
      expect.objectContaining({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      })
    );
  });
});
