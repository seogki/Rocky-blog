import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/app/data";
import remarkGfm from "remark-gfm";
import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/app/interface/posts.interface";
import remarkMdxImages from "remark-mdx-images";
type Props = {
  category: string;
  post: Post;
};

export default async function PostItem({ category, post }: Props) {
  const options = {
    // made available to the arguments of any custom mdx component
    scope: {},
    // MDX's available options, see the MDX docs for more info.
    // https://mdxjs.com/packages/mdx/#compilefile-options
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx"
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: false
  };

  return (
    <>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto">
        <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post?.title}`}</h1>
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={post?.body} options={options} />
        </Suspense>
      </article>
    </>
  );
}
