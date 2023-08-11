import { Category, Post } from "../interface/posts.interface";

const BASE_URL = process.env.API_URL;

export async function getCategories(): Promise<Array<Category>> {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPosts(): Promise<Array<Post>> {
  const res = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 10 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
