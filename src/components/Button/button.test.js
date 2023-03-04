import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton from '.';

describe('Button', () => {
  test("renders Custom Button text correctly", () => {
    const buttonText = "Click me";
    render(<CustomButton text={buttonText} />);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
});