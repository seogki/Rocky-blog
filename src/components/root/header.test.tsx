import { render, screen } from "@testing-library/react";
import MyHeader from "./header";
import "@testing-library/jest-dom";

describe("header test", () => {
  test("display", async () => {
    /* @ts-expect-error Async Server Component */
    render(<MyHeader className="" />);

    // expect(screen.getByText("Rocky Blog")).toBeInTheDocument();
  });
});
