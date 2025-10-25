import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Header from "./Header";

describe("Header", () => {
  it('should render "HotSauce AI" title', () => {
    render(<Header onProfilePress={jest.fn()} />);

    expect(screen.getByText("HotSauce AI")).toBeTruthy();
  });

  it("should render flame icon", () => {
    render(<Header onProfilePress={jest.fn()} />);

    // Check for icon by testID
    expect(screen.getByTestId("flame-icon")).toBeTruthy();
  });

  it("should render profile button", () => {
    render(<Header onProfilePress={jest.fn()} />);

    expect(screen.getByTestId("profile-button")).toBeTruthy();
  });

  it("should call onProfilePress when profile button is pressed", () => {
    const mockOnProfilePress = jest.fn();
    render(<Header onProfilePress={mockOnProfilePress} />);

    const profileButton = screen.getByTestId("profile-button");
    fireEvent.press(profileButton);

    expect(mockOnProfilePress).toHaveBeenCalledTimes(1);
  });

  it("should have accessible profile button with label", () => {
    render(<Header onProfilePress={jest.fn()} />);

    const profileButton = screen.getByTestId("profile-button");
    expect(profileButton.props.accessibilityLabel).toBe("Open profile");
  });
});
