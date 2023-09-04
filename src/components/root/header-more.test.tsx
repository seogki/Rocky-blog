import { render, screen } from "@testing-library/react";
import HeaderMore from "./header-more";
import { renderWithProviders } from "@/test/test-utils";

describe("header nav test", () => {
  test("when isDrawerOpen is true open navigation", async () => {
    const initialHeader = { isDrawerOpen: false, isMore: true };

    const { container } = renderWithProviders(<HeaderMore />, {
      preloadedState: {
        header: initialHeader
      }
    });

    expect(container.lastElementChild?.tagName).toBe("DIV");
  });

  test("when isDrawerOpen is close hide navigation", async () => {
    const initialHeader = { isDrawerOpen: false, isMore: false };

    const { container } = renderWithProviders(<HeaderMore />, {
      preloadedState: {
        header: initialHeader
      }
    });

    expect(container.lastElementChild?.tagName).toBe("svg");
  });
});
