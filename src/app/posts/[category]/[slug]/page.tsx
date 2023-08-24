import PostItem from "@/app/components/post/post-item";
import PostItemAside from "@/app/components/post/post-item-aside";
import PostItemSkeleton from "@/app/components/skeleton/post-item-skeleton";
import TopScrollButton from "@/app/components/top-scroll-button";
import { getPost } from "@/app/data";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

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

  const post = await getPost(slug, category);

  if (!post || post === null) {
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

  const post = await getPost(slug, category);

  if (!post) {
    redirect("/");
  }

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
