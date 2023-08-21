import PostItem from "@/app/components/post/post-item";
import { getPost, getPostV2 } from "@/app/data";
import { Metadata } from "next";
import path from "path";

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

  if (!post || post === null) {
    return {
      title: "Rocky Blog - Post",
      description: "Rocky Blog"
    };
  }

  return {
    title: `[${category}] ${post.title}`,
    description: post.description
  };
};

export default async function Posts({ params }: Props) {
  const { category, slug } = params;

  const data = await getPostV2(slug, category);

  return (
    <>
      <PostItem category={category} data={data} />
    </>
  );
}
