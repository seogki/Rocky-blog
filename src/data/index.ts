import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { cache } from "react";
import {
  Frontmatter,
  Post,
  Category,
  PostNavContainer
} from "../interface/posts.interface";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MdxCustomComponent } from "@/components/mdx-custom-component";
import { remarkReadingTime } from "@/utils/remark-reading-time";
import { rehypeTocExtractHeadings } from "@/utils/rehype-toc-extract-headings";

const isNotTest = process.env.NODE_ENV !== "test";

function testCache<T extends Function>(func: T) {
  return func;
}
const cachedFunc = isNotTest ? cache : testCache;

export const getCategories = cachedFunc(async () => {
  const filePath = path.join(process.cwd(), "src", "posts");
  const categoryNameList = await fs.readdir(filePath);

  const categoryList: Category[] = await Promise.all(
    categoryNameList.map(async (category) => {
      const length = await getAllPostLengthByCategory(category);

      return { length, name: category };
    })
  );

  return categoryList;
});

export const getAllPostLengthByCategory = cachedFunc(
  async (categoryName: string) => {
    const basePath = [process.cwd(), "src", "posts", categoryName];
    const filePath = path.join(...basePath);
    const files = await fs.readdir(filePath);
    const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");

    return mdxFiles.length;
  }
);

export const getAllPostsOrderByDate = cachedFunc(async (limit = 0) => {
  const categoryList = await getCategories();

  const list: Post[] = [];

  for await (const category of categoryList) {
    // if (limit !== 0 && list.length >= 5) break;
    const posts = await getPostsByCategoryName(category.name, false);
    list.push(...posts);
  }

  list.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  if (limit === 0) return list;

  return list.slice(0, 5);
});

const filterIncludeTag = (post: Post, tagName: string) => {
  const { tags } = post;
  if (tags.includes(tagName)) return true;

  return false;
};

export const getPostsByTagName = cachedFunc(async (tagName: string) => {
  const list = await getAllPostsOrderByDate();
  const tagIncludeList = list.filter((post) => filterIncludeTag(post, tagName));

  return tagIncludeList;
});

export const getPostsByCategoryName = cachedFunc(
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
        tags: frontmatter.tags.split(","),
        body: content,
        category: categoryName,
        slug: mdx.replace(".mdx", "")
      } as Post);
    }

    if (!sort) return list;

    return list.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }
);

export const getPost = async (slug: string, categoryName: string) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  return posts.find((post) => post?.slug === slug);
};

export const getPostNavContainer = async (
  slug: string,
  categoryName: string
) => {
  const posts = await getPostsByCategoryName(categoryName);

  if (posts.length < 1) return;

  const postIdx = posts.findIndex((post) => post?.slug === slug);

  if (postIdx < 0) return;

  return {
    prev: postIdx - 1 >= 0 ? posts[postIdx - 1] : undefined,
    current: posts[postIdx],
    next: postIdx + 1 < posts.length ? posts[postIdx + 1] : undefined
  } as PostNavContainer;
};
