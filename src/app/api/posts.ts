import { Category, Post, SavePostPayload } from "../interface/posts.interface";
import Instance from "./axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const BASE_URL = "/api";

export async function getCategories(): Promise<Array<Category>> {
  const res = await fetch(`${BASE_URL}/categories`, {
    next: { revalidate: 10 }
  });

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

export async function getPost(): Promise<Post> {
  const res = await fetch(`${BASE_URL}/post`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function savePost(payload: SavePostPayload): Promise<boolean> {
  const res = await Instance({
    method: "POST",
    url: `${BASE_URL}/post`,
    data: payload
  });

  if (!res.status) {
    throw new Error("Failed to fetch data");
  }

  return true;
}
