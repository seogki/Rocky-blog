import { render, screen } from "@testing-library/react";
import MyHeader from "./header";

describe("header test", () => {
  test("display", async () => {
    render(<MyHeader />);

    // expect(screen.getByText("Rocky Blog")).toBeInTheDocument();
  });
});
