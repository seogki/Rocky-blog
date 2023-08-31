import { render, screen } from "@testing-library/react";
import HeaderTitle from "./header-title";
import { renderWithProviders } from "@/redux/test-utils";

describe("header title test", () => {
  test("header title exists", async () => {
    // render(<HeaderTitle />); without redux provider

    renderWithProviders(<HeaderTitle />); //with redux provider

    const link: HTMLAnchorElement = screen.getByRole("link");

    expect(link.textContent).toEqual("Rocky Blog");
  });
});
