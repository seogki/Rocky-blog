import PostList from "@/components/post/post-list";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  searchParams: {
    tag?: string;
  };
};

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  const { tag } = searchParams;
  const baseUrl = "https://www.rockyblog.dev";
  return {
    title: `Rocky Blog - Posts Search List [${tag}]`,
    description: `This is my Rocky Blog Search List of ${tag}`,
    alternates: {
      canonical: tag ?? `${baseUrl}/posts/search?tag=${tag}`
    },
    openGraph: {
      title: `Rocky Blog - Posts Search List [${tag}]`,
      description: `This is my Rocky Blog Search List of ${tag}`,
      siteName: "Rocky Blog",
      type: "article",
      url: `${baseUrl}/posts/search?tag=${tag}`,
      images: ["/og.jpg"]
    }
  };
};

export default function PostSearchPage({ searchParams }: Props) {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">
          {searchParams.tag && `TAG: ${searchParams.tag}`}
        </h1>

        <Suspense fallback={<PostListSkeleton />}>
          <PostList tag={searchParams.tag} />
        </Suspense>
      </section>
    </>
  );
}
