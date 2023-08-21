import PostItem from "@/app/components/post/post-item";
import { getPost } from "@/app/data";
import { Metadata } from "next";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { category, slug } = params;

  const post = await getPost(slug, category);

  return {
    title: `[${category}] ${post?.title}`,
    description: post?.description
  };
};

export default async function Posts({ params }: Props) {
  const { category, slug } = params;

  const post = await getPost(slug, category);

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostItem category={category} post={post} />
    </>
  );
}
