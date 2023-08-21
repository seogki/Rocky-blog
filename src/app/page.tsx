import PostList from "./components/post/post-list";
import PostContainer from "./components/post/post-container";
import { getCategories } from "./data";
import { Metadata } from "next";
import PostListSkeleton from "./components/skeleton/post-list-skeleton";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const categories = await getCategories();

  return {
    title: `Rocky Blog - Posts [${categories[0]}]`,
    description: `Rocky Blog - Posts [${categories[0]}]`
  };
};

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={categories[0]}>
        <Suspense fallback={<PostListSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={categories[0]}></PostList>
        </Suspense>
      </PostContainer>
    </>
  );
}
