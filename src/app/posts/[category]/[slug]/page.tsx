import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/app/data";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function Posts({ params }: Props) {
  const { category, slug } = params;

  const post = await getPost(slug, category);

  console.debug(post, slug, category);

  return (
    <>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
        <h1>{post!.title}</h1>
        {/* @ts-expect-error Server Component*/}
        <MDXRemote source={post!.body} />
      </article>
    </>
  );
}
