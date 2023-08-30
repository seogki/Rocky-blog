// import PostList from "@/components/post/post-list";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import dynamic from "next/dynamic";

type Props = {
  params: {
    category?: string;
  };
};

const PostList = dynamic(() => import("@/components/post/post-list"), {
  loading: () => <PostListSkeleton />
});

export const generateMetadata = ({ params }: Props): Metadata => {
  const { category } = params;

  return {
    title: `Rocky Blog - Posts [${category}]`,
    description: `Rocky Blog - Posts [${category}]`
  };
};

export default function PostListPage({ params }: Props) {
  const { category } = params;
  if (!category) return notFound();

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{category}</h1>
        <PostList category={category} />
      </section>
    </>
  );
}
