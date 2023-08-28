import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { cache } from "react";
import { Frontmatter, Post } from "../interface/posts.interface";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MdxCustomComponent } from "@/components/mdx-custom-component";
import { remarkReadingTime } from "@/utils/remark-reading-time";
import { rehypeTocExtractHeadings } from "@/utils/rehype-toc-extract-headings";
import "server-only";

export const getCategories = cache(async () => {
  const filePath = path.join(process.cwd(), "src", "posts");
  const categories = await fs.readdir(filePath);
  return categories;
});

export const getAllPostsOrderByDate = cache(async () => {
  const categories = await getCategories();

  const list: Post[] = [];

  for await (const category of categories) {
    const posts = await getPostsByCategoryName(category, false);
    list.push(...posts);
  }

  list.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return list;
});

export const getPostsByCategoryName = cache(
  async (categoryName: string, sort = true) => {
    const list: Post[] = [];
    const { components } = MdxCustomComponent();

    const basePath = [process.cwd(), "src", "posts", categoryName];
    const filePath = path.join(...basePath);
    const files = await fs.readdir(filePath);
    const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");

    for await (const mdx of mdxFiles) {
      const filePath = path.join(...basePath, mdx);

      const source = await fs.readFile(filePath, "utf8");

      const { content, frontmatter } = await compileMDX<Frontmatter>({
        options: {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkReadingTime],
            rehypePlugins: [
              rehypeSlug,
              rehypeCodeTitles,
              rehypePrism,
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: "toc"
                  }
                }
              ],
              rehypeTocExtractHeadings
            ]
          },
          parseFrontmatter: true
        },
        components: { ...components },
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

    if (!sort) return list;

    return list.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }
);

export const getPost = cache(async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
});
