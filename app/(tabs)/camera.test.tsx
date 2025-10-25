import React from "react";
import { render, screen } from "@testing-library/react-native";
import CameraScreen from "./camera";

describe("CameraScreen", () => {
  it("should render coming soon message", () => {
    render(<CameraScreen />);

    expect(screen.getByText("Camera")).toBeTruthy();
    expect(screen.getByText("Coming soon!")).toBeTruthy();
  });

  it("should render placeholder icon", () => {
    render(<CameraScreen />);

    expect(screen.getByTestId("camera-icon")).toBeTruthy();
  });

  it("should have centered content", () => {
    render(<CameraScreen />);

    const container = screen.getByTestId("camera-container");
    expect(container.props.style).toMatchObject(
      expect.objectContaining({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      })
    );
  });
});
