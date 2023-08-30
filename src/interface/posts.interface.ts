import { JSXElementConstructor, ReactElement } from "react";

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  published: boolean;
  minutesRead: string;
  tags: string;
  toc: Toc[];
  body: ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface PostV2 {
  source: string;
  slug: string;
}

export type Toc = {
  href: string;
  parent: string;
  text: string;
};

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  toc: Toc[];
  minutesRead: string;
  published: boolean;
};
