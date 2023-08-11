import { getCategories, getPosts } from "@/app/api/posts";
import { Category } from "@/app/interface/posts.interface";
import { NextResponse } from "next/server";
const BASE_URL = process.env.API_URL;
export async function getCategoriesClient() {
  const res = await fetch(`${BASE_URL}/categories`);

  const data: Category[] = await res.json();

  return NextResponse.json({ data });
}
