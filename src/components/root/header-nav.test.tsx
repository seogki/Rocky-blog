import { render, screen } from "@testing-library/react";
import HeaderNav from "./header-nav";
import { renderWithProviders } from "@/test/test-utils";
import { getCategories } from "@/data";
import {
  createReturnChildren,
  TransitionRoot
} from "@/test/headlessui-test-setup";
// import { expect, jest, test } from "@jest/globals";

// jest.mock("@headlessui/react", async () => {
//   const original = (await jest.importActual("@headlessui/react")) as object;

//   return {
//     ...original,
//     Dialog: Object.assign(createReturnChildren(), {
//       Panel: createReturnChildren()
//     }),
//     Transition: Object.assign(TransitionRoot, {
//       Child: createReturnChildren(),
//       Root: TransitionRoot
//     })
//   };
// });

describe("header nav test", () => {
  test("when isDrawerOpen is true open navigation", async () => {
    const categories = await getCategories();

    const initialHeader = { isDrawerOpen: true, isMore: false };

    const { container } = renderWithProviders(
      <HeaderNav categories={categories} />,
      {
        preloadedState: {
          header: initialHeader
        }
      }
    );

    // const link: HTMLAnchorElement = screen.getByRole("link");
    console.debug(container.lastChild);
    expect(container.lastChild).not.toBeNull();
  });
});
