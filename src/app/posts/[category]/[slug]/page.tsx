import { MdxCustomComponent } from "@/app/components/mdx-custom-component";
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

  const { components } = MdxCustomComponent();

  const post = await getPost(slug, category, components);

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

  const { components } = MdxCustomComponent();

  const post = await getPost(slug, category, components);

  return (
    <>
      <PostItem category={category} post={post} />
    </>
  );
}
