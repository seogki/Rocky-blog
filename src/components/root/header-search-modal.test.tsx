import { fireEvent } from "@testing-library/react";
import HeaderSearchModal from "./header-search-modal";
import { PairedPostsByTitle, Post } from "@/interface/posts.interface";
import { renderWithProviders } from "@/test/test-utils";
import React from "react";

const post: Post = {
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
};

const postsPairedByTitle: PairedPostsByTitle = {
  my: [post],
  post: [post],
  test2: [post],
  test3: [post],
  yes: [post],
  no: [post]
};

const closeModal = jest.fn();

const Component = (
  <HeaderSearchModal
    closeModal={closeModal}
    postsPairedByTitle={postsPairedByTitle}
  />
);

test("should display search tag on mount", async () => {
  const { findByTestId, container } = renderWithProviders(Component);
  const modalTag = await findByTestId("header-search-modal");
  expect(modalTag).toBeInTheDocument();
  // expect(container).toMatchSnapshot();
});

test("should display post title when input my", async () => {
  const { findByPlaceholderText, rerender, findAllByText } =
    renderWithProviders(Component);

  const inputTag = await findByPlaceholderText("Search for anything...");

  expect(inputTag).toBeInTheDocument();

  fireEvent.change(inputTag, { target: { value: "my" } });

  rerender(Component);

  const postTitleTag = await findAllByText(post.title);

  expect(postTitleTag[0]).toBeInTheDocument();
});

test("should execute function onclick", async () => {
  const { findByTestId, rerender } = renderWithProviders(Component);

  const modalCloseBtnTag = await findByTestId("modal-close-btn");

  expect(modalCloseBtnTag).toBeInTheDocument();

  fireEvent.click(modalCloseBtnTag);

  rerender(Component);

  expect(closeModal).toHaveBeenCalled();
});
