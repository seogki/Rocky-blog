import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/app/interface/posts.interface";
type Props = {
  category: string;
  post: Post;
};

export default async function PostItem({ category, post }: Props) {
  const options = {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx"
    },
    parseFrontmatter: false
  };

  return (
    <>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto post-article break-all">
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post?.title}`}</h1>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={post?.body} options={options} />
        </Suspense>
      </article>
      <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside>
    </>
  );
}
