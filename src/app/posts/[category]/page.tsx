import PostList from "@/app/components/post/post-list";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PostListSkeleton from "@/app/components/skeleton/post-list-skeleton";

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

export default function Posts({ params }: Props) {
  const { category } = params;
  if (!category) return notFound();

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        {category && (
          <h1 className="text-2xl font-bold text-center my-2">{category}</h1>
        )}
        <Suspense fallback={<PostListSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={category} />
        </Suspense>
      </section>
    </>
  );
}
