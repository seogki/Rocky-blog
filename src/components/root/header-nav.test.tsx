import { render, screen } from "@testing-library/react";
import HeaderNav from "./header-nav";
import { renderWithProviders } from "@/test/test-utils";
import { Category } from "@/interface/posts.interface";

describe("header nav test", () => {
  const categoryList: Category[] = [
    {
      length: 5,
      name: "JEST"
    },
    {
      length: 5,
      name: "MARKDOWN"
    },
    {
      length: 5,
      name: "NEXTJS"
    }
  ];

  test("when isDrawerOpen is true open navigation", async () => {
    const initialHeader = { isDrawerOpen: true, isMore: false };

    const { container } = renderWithProviders(
      <HeaderNav categories={categoryList} />,
      {
        preloadedState: {
          header: initialHeader
        }
      }
    );

    expect(container.lastElementChild?.tagName).toBe("DIV");
  });

  test("when isDrawerOpen is close hide navigation", async () => {
    const initialHeader = { isDrawerOpen: false, isMore: false };

    const { container } = renderWithProviders(
      <HeaderNav categories={categoryList} />,
      {
        preloadedState: {
          header: initialHeader
        }
      }
    );

    expect(container.lastElementChild?.tagName).toBe("svg");
  });
});
