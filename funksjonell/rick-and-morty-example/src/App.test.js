import React from "react";
import { render } from "@testing-library/react";
import Character from "./Character/Character";

test("renders character", () => {
  const { getByText } = render(<Character character={{ name: "Rick Sanchez" }} />);
  expect(getByText(/Rick Sanchez/i)).toBeInTheDocument();
});
