import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";
import { cache } from "react";
import { Frontmatter, Post } from "../interface/posts.interface";

export const getCategories = cache(async (): Promise<string[]> => {
  const filePath = path.join(process.cwd(), "src", "posts");
  const categories = await fs.readdir(filePath);
  return categories;
});

export const getPostsByCategoryName = cache(
  async (categoryName: string, components: any) => {
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

          const source = await fs.readFile(filePath, "utf8");

          const { content, frontmatter } = await compileMDX<Frontmatter>({
            options: {
              mdxOptions: {
                remarkPlugins: [remarkGfm]
              },
              parseFrontmatter: true
            },
            components: { ...components, ...{} },
            source
          });

          return {
            ...frontmatter,
            body: content,
            slug: file.replace(".mdx", "")
          } as Post;
        })
    );
  }
);

export const getPost = async (
  slug: string,
  categoryName: string,
  components: any
) => {
  const posts = await getPostsByCategoryName(categoryName, components);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
};
