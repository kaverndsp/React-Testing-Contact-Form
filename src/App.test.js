import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
const { getByTestId } = render(<App />);
​
const appElement = getByTestId(/app/i)
expect(appElement).toBeInTheDocument()
});
