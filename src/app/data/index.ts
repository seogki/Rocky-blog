import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import { Post } from "../interface/posts.interface";

const matter = require("gray-matter");

export const getCategories = cache(async (): Promise<string[]> => {
  const categories = await fs.readdir("src/app/data/posts");
  return categories;
});

export const getPostsByCategoryName = cache(async (categoryName: string) => {
  const posts = await fs.readdir(`src/app/data/posts/${categoryName}`);
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `src/app/data/posts/${categoryName}/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return {
          ...data,
          body: content,
          slug: file.replace(".mbx", "")
        } as Post;
      })
  );
});

export const getPost = async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
};