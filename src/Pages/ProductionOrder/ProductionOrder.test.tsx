// MyComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // Ensure this import is correct
import ProductionOrder from "./ProductionOrder";
import { Providers } from "../../lib/Stores/Providers";

describe("Production Order", () => {
  render(<ProductionOrder />, {
    wrapper: ({ children }) => <Providers>{children}</Providers>,
  });
  test("Filter is initial hidden", () => {
    const form = screen.getByRole("form");
    expect(form).toHaveLength(1);
    console.log("Test passed");
  });
});
