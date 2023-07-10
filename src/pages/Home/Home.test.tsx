import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

test("하이 텍스트 표시", () => {
  render(<Home />);
  const target = screen.getByText(/하이/i);
  expect(target).toBeInTheDocument();
});
