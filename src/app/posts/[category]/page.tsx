import PostContainer from "@/app/components/post/post-container";
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
