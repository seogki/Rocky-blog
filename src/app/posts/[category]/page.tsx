import PostContainer from "@/app/components/post/post-container";
import PostList from "@/app/components/post/post-list";
import PostListSkeleton from "@/app/components/skeleton/post-list-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category?: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { category } = params;

  return {
    title: `Rocky Blog - Posts [${category}]`,
    description: `Rocky Blog - Posts [${category}]`
  };
};

export default async function Posts({ params }: Props) {
  const { category } = params;

  if (!category) return notFound();

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={category}>
        <Suspense fallback={<PostListSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={category} />
        </Suspense>
      </PostContainer>
    </>
  );
}
