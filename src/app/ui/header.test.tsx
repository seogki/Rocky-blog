import { render, screen } from "@testing-library/react";
import MyHeader from "@/app/ui/header";
import "@testing-library/jest-dom";

describe("header test", () => {
  test("display", () => {
    render(<MyHeader />);

    expect(screen.getByText("Rocky Blog")).toBeInTheDocument();
  });
});
