import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/app/data";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function PostItem({ params }: Props) {
  const { category, slug } = params;

  const post = await getPost(slug, category);

  console.debug(post, slug, category);
  return (
    <>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto">
        <h1 className="text-center mt-4 lg:mt-8">{post!.title}</h1>
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={post!.body} />
      </article>
    </>
  );
}
