import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";
import { cache } from "react";
import { Frontmatter, Post } from "../interface/posts.interface";

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

export const getPost = async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
};

export const getPostV2 = async (slug: string, categoryName: string) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    categoryName,
    `${slug}.mdx`
  );

  const raw = await fs.readFile(filePath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    mdxOptions: {
      // remarkPlugins: [remarkGfm],
      development: false
    },
    parseFrontmatter: true
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized
  };
};
