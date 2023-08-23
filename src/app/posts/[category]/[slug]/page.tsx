import { MdxCustomComponent } from "@/app/components/mdx-custom-component";
import PostItemContainer from "@/app/components/post/post-item-container";
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

  const post = await getPost(slug, category);

  return (
    <>
      <PostItemContainer category={category} post={post} />
    </>
  );
}
