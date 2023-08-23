import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";
import { cache } from "react";
import { Frontmatter, Post } from "../interface/posts.interface";
import rehypePrism from "rehype-prism-plus";
import { MdxCustomComponent } from "../components/mdx-custom-component";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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

  const mdxs = posts.filter((file) => path.extname(file) === ".mdx");

  const list: Post[] = [];

  for await (const mdx of mdxs) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "posts",
      categoryName,
      mdx
    );

    const source = await fs.readFile(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["anchor"]
                }
              }
            ]
          ]
        },
        parseFrontmatter: true
      },
      components: { ...components, ...{} },
      source
    });

    if (!frontmatter.published) continue;

    list.push({
      ...frontmatter,
      body: content,
      category: categoryName,
      slug: mdx.replace(".mdx", "")
    } as Post);
  }

  return list.filter((item) => item);
});

export const getPost = async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
};
