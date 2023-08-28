import PostItemContainer from "@/components/post/post-item-container";
import { getPost } from "@/data";
import { Post } from "@/interface/posts.interface";
import { Metadata } from "next";
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

export default function PostItemPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <PostItemContainer params={params} />
      </Suspense>
    </>
  );
}
