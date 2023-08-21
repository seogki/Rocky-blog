import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import { Post } from "../interface/posts.interface";

const matter = require("gray-matter");

export const getCategories = cache(async (): Promise<string[]> => {
  const filePath = path.join(process.cwd(), "src", "posts");
  const categories = await fs.readdir(filePath);
  return categories;
});

export const getPostsByCategoryName = cache(async (categoryName: string) => {
  const filePath = path.join(process.cwd(), "src", "posts", categoryName);

  const posts = await fs.readdir(filePath);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(
          process.cwd(),
          "src",
          "posts",
          categoryName,
          file
        );

        // console.debug(filePath);

        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return {
          ...data,
          body: content,
          slug: file.replace(".mdx", "")
        } as Post;
      })
  );
});

export const getPost = cache(async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
});
