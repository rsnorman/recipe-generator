import React from "react";
import { render, screen } from "@testing-library/react-native";
import AddRecipeScreen from "./add-recipe";

describe("AddRecipeScreen", () => {
  it("should render coming soon message", () => {
    render(<AddRecipeScreen />);

    expect(screen.getByText("Add Recipe")).toBeTruthy();
    expect(screen.getByText("Coming soon!")).toBeTruthy();
  });

  it("should render placeholder icon", () => {
    render(<AddRecipeScreen />);

    expect(screen.getByTestId("add-recipe-icon")).toBeTruthy();
  });

  it("should have centered content", () => {
    render(<AddRecipeScreen />);

    const container = screen.getByTestId("add-recipe-container");
    expect(container.props.style).toMatchObject(
      expect.objectContaining({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      })
    );
  });
});
