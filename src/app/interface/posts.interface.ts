import { type MDXRemoteSerializeResult } from "next-mdx-remote";
export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: any;
}

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
};

export type PostV2<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};
