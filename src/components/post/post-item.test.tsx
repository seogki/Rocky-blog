import { render } from "@testing-library/react";
import PostItem from "./post-item";
import { Post } from "@/interface/posts.interface";

test("should display empty description when data is empty", async () => {
  const { findByText } = render(<PostItem category={"MARKDOWN"} post={null} />);

  expect(await findByText("Post is not available")).not.toBeNull();
});

test("should display available contents description when data is not empty", async () => {
  const post: Post = {
    body: <div></div>,
    category: "MARKDOWN",
    date: "05/09/2023",
    description: "description",
    minutesRead: "3 mins read",
    published: true,
    slug: "test",
    tags: "test1,test2,test3",
    title: "TEST TITLE",
    toc: [
      {
        href: "test",
        parent: "h1",
        text: "text"
      }
    ]
  };

  const { findByRole, findByText } = render(
    <PostItem category={"MARKDOWN"} post={post} />
  );

  expect(await findByRole("heading", { level: 1 })).not.toBeNull();

  expect(await findByText("9th 05.2023")).not.toBeNull();

  expect(await findByText(/3 mins read/i)).not.toBeNull();
});
