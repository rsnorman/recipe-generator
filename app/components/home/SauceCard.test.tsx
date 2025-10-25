import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SauceCard from "./SauceCard";
import type { Sauce } from "@/app/types/sauce";

describe("SauceCard", () => {
  const mockSauce: Sauce = {
    id: "1",
    name: "Fire Fang",
    heatLevel: 3,
    imageUrl: "https://example.com/sauce.jpg",
  };

  it("should render sauce name", () => {
    render(<SauceCard sauce={mockSauce} onPress={jest.fn()} />);

    expect(screen.getByText("Fire Fang")).toBeTruthy();
  });

  it("should render sauce image with correct source", () => {
    render(<SauceCard sauce={mockSauce} onPress={jest.fn()} />);

    const image = screen.getByTestId("sauce-image");
    // expo-image wraps source in an array
    expect(image.props.source).toEqual([{ uri: "https://example.com/sauce.jpg" }]);
  });

  it("should render correct number of flame icons for heat level", () => {
    const { rerender } = render(
      <SauceCard sauce={{ ...mockSauce, heatLevel: 1 }} onPress={jest.fn()} />
    );
    expect(screen.getAllByTestId(/flame-heat-/)).toHaveLength(1);

    rerender(<SauceCard sauce={{ ...mockSauce, heatLevel: 3 }} onPress={jest.fn()} />);
    expect(screen.getAllByTestId(/flame-heat-/)).toHaveLength(3);

    rerender(<SauceCard sauce={{ ...mockSauce, heatLevel: 5 }} onPress={jest.fn()} />);
    expect(screen.getAllByTestId(/flame-heat-/)).toHaveLength(5);
  });

  it("should call onPress with sauce when card is pressed", () => {
    const mockOnPress = jest.fn();
    render(<SauceCard sauce={mockSauce} onPress={mockOnPress} />);

    const card = screen.getByTestId("sauce-card");
    fireEvent.press(card);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith(mockSauce);
  });

  it("should ellipsize long sauce names", () => {
    const longNameSauce: Sauce = {
      ...mockSauce,
      name: "This Is A Very Long Sauce Name That Should Be Truncated",
    };
    render(<SauceCard sauce={longNameSauce} onPress={jest.fn()} />);

    const nameText = screen.getByText(longNameSauce.name);
    expect(nameText.props.numberOfLines).toBe(2);
    expect(nameText.props.ellipsizeMode).toBe("tail");
  });

  it("should have accessible label", () => {
    render(<SauceCard sauce={mockSauce} onPress={jest.fn()} />);

    const card = screen.getByTestId("sauce-card");
    expect(card.props.accessibilityLabel).toBe("Fire Fang, heat level 3 out of 5");
  });
});
