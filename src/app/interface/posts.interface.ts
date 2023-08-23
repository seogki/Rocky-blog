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
  body: ReactElement<any, string | JSXElementConstructor<any>>;
}

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  minutesRead: string;
  published: boolean;
};
