import PostList from "./components/post/post-list";
import PostContainer from "./components/post/post-container";
import { getCategories } from "./data";
import { Metadata } from "next";
import PostListSkeleton from "./components/skeleton/post-list-skeleton";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Rocky Blog - Posts [RECENT]`,
    description: `Rocky Blog - Posts [RECENT]`
  };
};

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={"RECENT"}>
        <Suspense fallback={<PostListSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={"RECENT"}></PostList>
        </Suspense>
      </PostContainer>
    </>
  );
}
