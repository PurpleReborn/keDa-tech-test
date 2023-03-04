import React from "react";
import { render, screen } from "@testing-library/react";
import Title from '.'

describe("Button", () => {
  test("renders custom Title text correctly", () => {
    const buttonText = "Click me";
    render(<Title text={buttonText} />);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
});
