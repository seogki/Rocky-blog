import { fireEvent, render, screen } from "@testing-library/react";
import HeaderSearch from "./HeaderSearch";
import { renderWithProviders } from "@/test/test-utils";
import { Post } from "@/interface/posts.interface";

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
  const { findByRole } = renderWithProviders(<HeaderSearch posts={posts} />);

  const searchBtn = await findByRole("button");
  expect(searchBtn).toBeInTheDocument();
});

test("should open dialog when click search button", async () => {
  const { findByRole } = renderWithProviders(<HeaderSearch posts={posts} />);

  const searchBtn = await findByRole("button");

  fireEvent.click(searchBtn);

  const modal = await findByRole("dialog");

  expect(modal).toBeInTheDocument();
});
