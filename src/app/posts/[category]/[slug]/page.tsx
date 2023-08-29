import PostItemContainer from "@/components/post/post-item-container";
import { getPost } from "@/data";
import { Post } from "@/interface/posts.interface";
import { Metadata } from "next";
import { Suspense } from "react";
import PostItemSkeleton from "@/components/skeleton/post-item-skeleton";

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
      <Suspense fallback={<PostItemSkeleton />}>
        <PostItemContainer params={params} />
      </Suspense>
    </>
  );
}
