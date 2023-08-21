"use client";

// import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote";
import { Suspense } from "react";
import Loading from "../loading";
import Image from "next/image";
import { Frontmatter, Post, PostV2 } from "@/app/interface/posts.interface";
type Props = {
  category: string;
  data: PostV2<Frontmatter>;
};

export default function PostItem({ category, data }: Props) {
  const ResponsiveImage = (props: any) => (
    <p className="test">
      <Image
        alt={props.alt}
        sizes="100%"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    </p>
  );

  const components = {
    Image: ResponsiveImage
  };

  return (
    <>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto post-article break-words">
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${data.frontmatter.title}`}</h1>
          <h3 className="text-right mt-2 text-base">{data.frontmatter.date}</h3>
          {/* <MDXRemote source={post.body} {...options} /> */}
          <MDXRemote {...data.serialized} components={components} />
        </Suspense>
      </article>
      {/* <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside> */}
    </>
  );
}
