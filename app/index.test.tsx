import React from "react";
import { render, screen } from "@testing-library/react-native";
import Index from "./index";

describe("Index Screen", () => {
  it("renders the welcome text", () => {
    render(<Index />);

    const welcomeText = screen.getByText("Edit app/index.tsx to edit this screen.");
    expect(welcomeText).toBeTruthy();
  });

  it("renders a centered view", () => {
    const { getByText } = render(<Index />);
    const textElement = getByText("Edit app/index.tsx to edit this screen.");

    expect(textElement).toBeTruthy();
  });
});
