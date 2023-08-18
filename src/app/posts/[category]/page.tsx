import PostContainer from "@/app/components/post/post-container";
import { getPostsByCategoryName } from "@/app/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import PostList from "@/app/components/post/post-list";

type Props = {
  params: {
    category: string;
  };
};

export default async function Posts({ params }: Props) {
  const { category } = params;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={category}>
        {/* @ts-expect-error Async Server Component */}
        <PostList category={category} />
      </PostContainer>
    </>
  );
}
