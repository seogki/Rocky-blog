import PostItem from "@/components/post/post-item";
import PostItemAside from "@/components/post/post-item-aside";
import TopScrollButton from "@/components/top-scroll-button";
import { getPost } from "@/data";
import { Post } from "@/interface/posts.interface";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { category, slug } = params;
  let post: Post | undefined;

  try {
    post = await getPost(slug, category);
  } catch (e: any) {
    console.error(e);
    return {
      title: "Rocky Blog - Post",
      description: "Rocky Blog"
    };
  }

  if (!post) {
    return {
      title: "Rocky Blog - Post",
      description: "Rocky Blog"
    };
  }

  return {
    title: `[${category}] ${post.title}`,
    description: post.description
  };
};

export default async function Posts({ params }: Props) {
  const { category, slug } = params;

  let post: Post | undefined;

  try {
    post = await getPost(slug, category);
  } catch (e: any) {
    console.error(e);
  }

  if (!post) redirect("/");

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1 relative">
        <PostItem category={category} post={post} />
        <TopScrollButton />
      </section>
      <PostItemAside toc={post.toc} />
    </>
  );
}
