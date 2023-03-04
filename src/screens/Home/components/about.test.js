/* eslint-disable */
import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  test("renders with correct height", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toHaveStyle("height: 100vh");
  });
});
