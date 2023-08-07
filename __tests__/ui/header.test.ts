import { render } from "@testing-library/react";
import MyHeader from "@/app/ui/header";
import "@testing-library/jest-dom";

describe("MyHeader", () => {
  it("display", () => {
    render(<MyHeader />);
  });
});
