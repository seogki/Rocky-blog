import PostItem from "@/app/components/post/post-item";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function Posts({ params }: Props) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostItem params={params} />
    </>
  );
}
