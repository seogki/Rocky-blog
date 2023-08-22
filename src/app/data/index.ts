import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";
import { cache } from "react";
import { Frontmatter, Post } from "../interface/posts.interface";
import rehypeHighlight from "rehype-highlight";
import rehypePrism from "rehype-prism-plus";
import { MdxCustomComponent } from "../components/mdx-custom-component";

export const getCategories = cache(async (): Promise<string[]> => {
  const filePath = path.join(process.cwd(), "src", "posts");
  const categories = await fs.readdir(filePath);
  return categories;
});

export const getAllPostsOrderByDate = cache(async () => {
  const categories = await getCategories();

  const list: Post[] = [];

  for await (const category of categories) {
    const posts = await getPostsByCategoryName(category);
    list.push(...posts);
  }

  list.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return list;
});

export const getPostsByCategoryName = cache(async (categoryName: string) => {
  const { components } = MdxCustomComponent();
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
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypePrism]
            },
            parseFrontmatter: true
          },
          components: { ...components, ...{} },
          source
        });

        return {
          ...frontmatter,
          body: content,
          category: categoryName,
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
