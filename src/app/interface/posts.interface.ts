export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: any;
}

export interface PostBody {
  title: string;
  date: string;
  description: string;
}

export interface Category {
  _id: string;
  name: string;
}
