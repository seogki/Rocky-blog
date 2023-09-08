import { Post, PostByTitle } from "@/interface/posts.interface";
import { cache } from "react";

const alphanumericRegex = /^[a-zA-Z]([\w -]*[a-zA-Z])?$/g;

const isAlphaNumeric = (text: string) => {
  return text.match(alphanumericRegex);
};

export const sortPostsByTitle = (posts: Post[]) => {
  const obj: PostByTitle = {};

  posts.forEach((post) => {
    post.title
      .toLocaleLowerCase()
      .replaceAll("-", " ")
      .replaceAll(".", " ")
      .split(" ")
      .forEach((title) => {
        if (isAlphaNumeric(title)) {
          const list = obj[title] ?? [];
          list.push(post);
          obj[title] = list;
        }
      });
  });

  return obj;
};
