import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import HeaderSearch from "./header-search";
import { renderWithProviders } from "@/test/test-utils";
import { Post } from "@/interface/posts.interface";
import RootLayout from "@/app/layout";

const posts: Post[] = [
  {
    title: "my post test2.test3 yes-no",
    body: <div></div>,
    category: "test",
    date: "11/09/2023",
    description: "test",
    minutesRead: "2min reads",
    published: true,
    slug: "test",
    tags: ["test1", "test2", "test3"],
    toc: [{ href: "test", parent: "h1", text: "text" }]
  }
];

test("should search button exists", async () => {
  const { findByTestId } = renderWithProviders(<HeaderSearch posts={posts} />);

  const searchBtn = await findByTestId("search-btn");
  expect(searchBtn).toBeInTheDocument();
});

test("should open dialog when click search button", async () => {
  let modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    modalRoot.setAttribute("data-testid", "modal-root");
  }

  const { findByTestId, container } = renderWithProviders(
    <HeaderSearch posts={posts} />
  );

  screen.debug();

  const searchBtn = await findByTestId("search-btn");

  // fireEvent.click(searchBtn);

  // const modalRootTag = await findByTestId("modal-root");
  // console.debug(modalRootTag);

  act(() => {
    fireEvent.click(searchBtn);
  });
  await waitFor(async () => {
    const modalRootTag = await findByTestId("modal-root");
    console.debug(modalRootTag);
    // expect(modalRootTag).toBeInTheDocument();
    // const modal = await findByTestId("header-search-modal");
    // expect(modal).toBeInTheDocument();
  });

  // fireEvent.click(searchBtn);

  // const modalRootTag = await findByTestId("modal-root");
  // console.debug(modalRootTag);
  // expect(modalRootTag).toBeInTheDocument();

  // const modal = await findByTestId("header-search-modal");
  // expect(modal).toBeInTheDocument();
});
