import { Post } from "@/interface/posts.interface";
import { sortPostsByTitle } from "./sort";

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

test("should return array of title key and value post", () => {
  const result = sortPostsByTitle(posts);
  const post = posts[0];

  expect(result).toStrictEqual({
    my: [post],
    post: [post],
    test2: [post],
    test3: [post],
    yes: [post],
    no: [post]
  });
});
