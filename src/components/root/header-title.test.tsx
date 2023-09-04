import { render, screen } from "@testing-library/react";
import HeaderTitle from "./header-title";
import { renderWithProviders } from "@/test/test-utils";

describe("header title test", () => {
  test("header title exists", async () => {
    renderWithProviders(<HeaderTitle />);

    const link: HTMLAnchorElement = screen.getByRole("link");

    expect(link.textContent).toEqual("Rocky Blog");
  });
});
