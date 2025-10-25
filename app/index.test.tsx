import React from "react";
import { render } from "@testing-library/react-native";
import Index from "./index";

// Mock expo-router Redirect component
jest.mock("expo-router", () => {
  const { Text } = jest.requireActual("react-native");
  return {
    Redirect: ({ href }: { href: string }) => <Text testID="redirect">{href}</Text>,
  };
});

describe("Index (Root)", () => {
  it("should redirect to tabs", () => {
    const { getByTestId } = render(<Index />);
    const redirect = getByTestId("redirect");

    expect(redirect.props.children).toBe("/(tabs)");
  });
});
