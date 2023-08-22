export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  published: boolean;
  tags: string;
  body: any;
}

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  published: boolean;
};
