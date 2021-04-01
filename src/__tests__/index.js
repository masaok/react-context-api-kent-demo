import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CountDisplay, Counter } from "../count";
import { CountProvider } from "../count-context";

test("can display and increment the count", () => {
  render(
    <>
      <CountDisplay />
      <Counter />
    </>,
    { wrapper: CountProvider }
  );
  const count = screen.getByText(/current count/i);
  expect(count).toHaveTextContent("The current count is 0");
  const button = screen.getByRole("button", { name: /increment count/i });
  userEvent.click(button);
  expect(count).toHaveTextContent("The current count is 1");
});
