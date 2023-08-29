import PostList from "@/components/post/post-list";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";
// import Loading from "./loading";

export const generateMetadata = (): Metadata => {
  return {
    title: `Rocky Blog - Posts [RECENT]`,
    description: `Rocky Blog - Posts [RECENT]`
  };
};

export default function PostHomePage() {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{"RECENT"}</h1>
        <Suspense fallback={<PostListSkeleton />}>
          <PostList category={"RECENT"} />
        </Suspense>
      </section>
    </>
  );
}
