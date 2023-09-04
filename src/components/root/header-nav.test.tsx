import { render, screen } from "@testing-library/react";
import HeaderNav from "./header-nav";
import { renderWithProviders } from "@/test/test-utils";
import { getCategories } from "@/data";
// import { expect, jest, test } from "@jest/globals";

describe("header nav test", () => {
  test("when isDrawerOpen is true open navigation", async () => {
    // const categories = await getCategories();

    const initialHeader = { isDrawerOpen: true, isMore: false };

    const { container } = renderWithProviders(
      <HeaderNav categories={["JEST", "NEXTJS", "MARKDOWN"]} />,
      {
        preloadedState: {
          header: initialHeader
        }
      }
    );

    expect(container.lastElementChild).not.toBeNull();
  });

  test("when isDrawerOpen is close hide navigation", async () => {
    // const categories = await getCategories();

    const initialHeader = { isDrawerOpen: false, isMore: false };

    const { container } = renderWithProviders(
      <HeaderNav categories={["JEST", "NEXTJS", "MARKDOWN"]} />,
      {
        preloadedState: {
          header: initialHeader
        }
      }
    );

    expect(container.lastElementChild?.tagName).toBe("svg");
  });
});
