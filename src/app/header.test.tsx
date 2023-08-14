import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyHeader from "./header";

describe("header test", () => {
  test("display", async () => {
    /* @ts-expect-error Async Server Component */
    render(<MyHeader />);

    expect(screen.getByText("Rocky Blog")).toBeInTheDocument();
  });
});
