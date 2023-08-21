import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Suspense } from "react";
import Loading from "../loading";
import Image from "next/image";
import { Post } from "@/app/interface/posts.interface";
type Props = {
  category: string;
  post: Post;
};

export default async function PostItem({ category, post }: Props) {
  const ResponsiveImage = (props: any) => (
    <Image
      alt={props.alt}
      sizes="100%"
      style={{ width: "100%", height: "auto" }}
      {...props}
    />
  );

  const components = {
    img: ResponsiveImage
  };

  const options = {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      format: "mdx"
    },
    parseFrontmatter: true
  };

  if (!post || post === null) {
    return <></>;
  }

  return (
    <>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto post-article">
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post.title}`}</h1>
          {/* @ts-expect-error Server Component */}
          <MDXRemote
            source={post.body}
            components={{ ...components }}
            {...options}
          />
        </Suspense>
      </article>
      {/* <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside> */}
    </>
  );
}
