import { render, screen } from "@testing-library/react";
import MyFooter from "./footer";

describe("footer test", () => {
  test("test github link", async () => {
    render(<MyFooter />);
    expect(screen.getByTitle("Seogki's github")).toBeInTheDocument();
  });

  test("test email link", async () => {
    render(<MyFooter />);
    expect(screen.getByTitle("Seogki's mail")).toBeInTheDocument();
  });
});
