// MyComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // Ensure this import is correct
import ProductionOrder from "./ProductionOrder";

describe("Production Order", () => {
  render(<ProductionOrder />);
  test("Filter is initial hidden");
  const form = screen.getByRole("form");
  expect(form).toBeInTheDocument();
});
