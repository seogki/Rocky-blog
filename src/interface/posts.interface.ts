import { JSXElementConstructor, ReactElement } from "react";

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  published: boolean;
  minutesRead: string;
  tags: string[];
  toc: Toc[];
  body: MdxContents;
}

export type MdxContents = ReactElement<
  any,
  string | JSXElementConstructor<any>
>;

export type PostNavContainer = { current?: Post; prev?: Post; next?: Post };

export type Category = {
  length: number;
  name: string;
};

export type PairedPostsByTitle = { [index: string]: Post[] | undefined };

export type Toc = {
  href: string;
  parent?: TocParentType;
  text: string;
};

export type TocParentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type Frontmatter = {
  title: string;
  description: string;
  tags: string;
  date: string;
  toc: Toc[];
  minutesRead: string;
  published: boolean;
};
