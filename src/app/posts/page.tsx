import PostList from "@/components/post/post-list";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "./loading";

export default function PostListPage() {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{"RECENT"}</h1>
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Async Server Component */}
          <PostList category={"RECENT"} />
        </Suspense>
      </section>
    </>
  );
}
