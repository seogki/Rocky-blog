import { type MDXRemoteSerializeResult } from "next-mdx-remote";
export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string;
  body: any;
}

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
};
