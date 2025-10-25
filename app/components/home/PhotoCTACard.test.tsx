import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import PhotoCTACard from "./PhotoCTACard";

describe("PhotoCTACard", () => {
  it('should render "Take a Photo" text', () => {
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={jest.fn()} />);

    expect(screen.getByText("Take a Photo")).toBeTruthy();
  });

  it("should render subtitle text", () => {
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={jest.fn()} />);

    expect(screen.getByText("Tap to capture your hot sauce bottle")).toBeTruthy();
  });

  it("should render camera icon", () => {
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={jest.fn()} />);

    expect(screen.getByTestId("camera-icon")).toBeTruthy();
  });

  it('should render "Upload from gallery" link', () => {
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={jest.fn()} />);

    expect(screen.getByText("Upload from gallery")).toBeTruthy();
  });

  it("should call onTakePhotoPress when photo CTA is pressed", () => {
    const mockOnTakePhotoPress = jest.fn();
    render(<PhotoCTACard onTakePhotoPress={mockOnTakePhotoPress} onUploadPress={jest.fn()} />);

    const photoCTA = screen.getByTestId("photo-cta");
    fireEvent.press(photoCTA);

    expect(mockOnTakePhotoPress).toHaveBeenCalledTimes(1);
  });

  it("should call onUploadPress when upload link is pressed", () => {
    const mockOnUploadPress = jest.fn();
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={mockOnUploadPress} />);

    const uploadLink = screen.getByTestId("upload-link");
    fireEvent.press(uploadLink);

    expect(mockOnUploadPress).toHaveBeenCalledTimes(1);
  });

  it("should have accessible labels", () => {
    render(<PhotoCTACard onTakePhotoPress={jest.fn()} onUploadPress={jest.fn()} />);

    const photoCTA = screen.getByTestId("photo-cta");
    const uploadLink = screen.getByTestId("upload-link");

    expect(photoCTA.props.accessibilityLabel).toBe("Take a photo of hot sauce bottle");
    expect(uploadLink.props.accessibilityLabel).toBe("Upload from gallery");
  });
});
