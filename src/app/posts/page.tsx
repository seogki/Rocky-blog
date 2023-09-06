// import PostList from "@/components/post/post-list";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: `Rocky Blog - Posts [RECENT]`,
  description: `This is my Rocky Blog Recent Posts Page`
};

const PostList = dynamic(() => import("@/components/post/post-list"), {
  loading: () => <PostListSkeleton />
});

export function generateStaticParams() {
  return [];
}

export default function PostHomePage() {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{"RECENT"}</h1>
        <PostList category={"RECENT"} />
      </section>
    </>
  );
}
