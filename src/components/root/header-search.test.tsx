import userEvent from "@testing-library/user-event";
import HeaderSearch from "./header-search";
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
  const { findByTestId } = renderWithProviders(<HeaderSearch posts={posts} />);

  const searchBtn = await findByTestId("search-btn");
  expect(searchBtn).toBeInTheDocument();
});

test("should open dialog when click search button", async () => {
  const { findByTestId, container, rerender } = renderWithProviders(
    <HeaderSearch posts={posts} />
  );

  const modalRootTag = document.createElement("div");
  modalRootTag.setAttribute("id", "modal-root");

  container.appendChild(modalRootTag);

  const searchBtn = await findByTestId("search-btn");
  await userEvent.click(searchBtn);

  rerender(<HeaderSearch posts={posts} />);

  const modal = await findByTestId("header-search-modal");
  expect(modal).toBeInTheDocument();
});

afterEach(() => jest.resetAllMocks());
