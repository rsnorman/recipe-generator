import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RecentSaucesGrid from "./RecentSaucesGrid";
import type { Sauce } from "@/app/types/sauce";

describe("RecentSaucesGrid", () => {
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

  it("should render section header", () => {
    render(<RecentSaucesGrid sauces={mockSauces} onSaucePress={jest.fn()} />);

    expect(screen.getByText("Recent Sauces")).toBeTruthy();
  });

  it("should render empty state when sauces array is empty", () => {
    render(<RecentSaucesGrid sauces={[]} onSaucePress={jest.fn()} />);

    expect(screen.getByText("Your recent sauces will appear here")).toBeTruthy();
  });

  it("should render sauces when array has items", () => {
    render(<RecentSaucesGrid sauces={mockSauces} onSaucePress={jest.fn()} />);

    expect(screen.getByText("Fire Fang")).toBeTruthy();
    expect(screen.getByText("Inferno Blast")).toBeTruthy();
  });

  it("should handle array with 1 sauce", () => {
    const singleSauce = [mockSauces[0]];
    render(<RecentSaucesGrid sauces={singleSauce} onSaucePress={jest.fn()} />);

    expect(screen.getByText("Fire Fang")).toBeTruthy();
    expect(screen.queryByText("Inferno Blast")).toBeNull();
  });

  it("should handle array with 10 sauces", () => {
    const tenSauces: Sauce[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Sauce ${i + 1}`,
      heatLevel: ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5,
      imageUrl: `https://example.com/sauce${i + 1}.jpg`,
    }));

    render(<RecentSaucesGrid sauces={tenSauces} onSaucePress={jest.fn()} />);

    expect(screen.getByText("Sauce 1")).toBeTruthy();
    expect(screen.getByText("Sauce 10")).toBeTruthy();
  });

  it("should call onSaucePress with sauce data when sauce is pressed", () => {
    const mockOnSaucePress = jest.fn();
    render(<RecentSaucesGrid sauces={mockSauces} onSaucePress={mockOnSaucePress} />);

    const sauceCards = screen.getAllByTestId("sauce-card");
    fireEvent.press(sauceCards[0]);

    expect(mockOnSaucePress).toHaveBeenCalledTimes(1);
    expect(mockOnSaucePress).toHaveBeenCalledWith(mockSauces[0]);
  });
});
