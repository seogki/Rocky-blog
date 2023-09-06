// import PostList from "@/components/post/post-list";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import { Metadata } from "next";
import dynamic from "next/dynamic";

type Props = {
  searchParams: {
    tag?: string;
  };
};

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  const { tag } = searchParams;
  const baseUrl = "https://rocky-blog.vercel.app";
  return {
    title: `Rocky Blog - Posts Search List [${tag}]`,
    description: `This is my Rocky Blog Search List of ${tag}`,
    alternates: {
      canonical: tag ?? `${baseUrl}/posts/?tag=${tag}`
    },
    openGraph: {
      title: `Rocky Blog - Posts Search List [${tag}]`,
      description: `This is my Rocky Blog Search List of ${tag}`
    }
  };
};

const PostList = dynamic(() => import("@/components/post/post-list"), {
  loading: () => <PostListSkeleton />
});

export default function PostSearchPage({ searchParams }: Props) {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">
          {searchParams.tag && `TAG: ${searchParams.tag}`}
        </h1>
        <PostList tag={searchParams.tag} />
      </section>
    </>
  );
}
