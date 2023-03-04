/* eslint-disable */
import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  test("renders with correct background color", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveStyle(
      "background: linear-gradient(to right bottom, #3f2b96, #a8c0ff) rgb(255, 255, 255)"
    );
  });
});
