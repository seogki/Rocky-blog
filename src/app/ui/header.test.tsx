import { render } from "@testing-library/react";
import MyHeader from "@/app/ui/header";
import "@testing-library/jest-dom";

describe("header test", () => {
  test("display", () => {
    render(<MyHeader />);
  });
});
