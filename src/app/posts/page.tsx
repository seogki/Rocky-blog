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

  if (tag) {
    return {
      title: `Rocky Blog - Posts Search List [${tag}]`,
      description: `This is my Rocky Blog Search List of ${tag}`,
      alternates: {
        canonical: `${baseUrl}/posts`
      },
      openGraph: {
        title: `Rocky Blog - Posts Search List [${tag}]`,
        description: `This is my Rocky Blog Search List of ${tag}`,
        siteName: "Rocky Blog",
        type: "article",
        url: `${baseUrl}/posts?tag=${tag}`,
        images: ["/og.jpg"]
      }
    };
  } else {
    return {
      title: `Rocky Blog - Posts [RECENT]`,
      description: `This is my Rocky Blog Recent Posts Page`,
      openGraph: {
        title: `Rocky Blog - Posts [RECENT]`,
        description: `This is my Rocky Blog Recent Posts Page`,
        siteName: "Rocky Blog",
        type: "article",
        url: `${baseUrl}/posts`,
        images: ["/og.jpg"]
      }
    };
  }
};

export function generateStaticParams() {
  return [];
}

export default function PostHomePage({ searchParams }: Props) {
  const { tag } = searchParams;

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{`${
          tag ? `TAG: ${tag}` : "RECENT"
        }`}</h1>
        <Suspense fallback={<PostListSkeleton />}>
          {tag ? <PostList tag={tag} /> : <PostList category={"RECENT"} />}
        </Suspense>
      </section>
    </>
  );
}
