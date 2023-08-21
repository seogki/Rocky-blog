import PostContainer from "@/app/components/post/post-container";
import PostList from "@/app/components/post/post-list";
import { Metadata } from "next";

type Props = {
  params: {
    category: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { category } = params;

  return {
    title: `Rocky Blog - Posts [${category}]`,
    description: `Rocky Blog - Posts [${category}]`
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
