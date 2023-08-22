import { Suspense } from "react";
import Loading from "../loading";

import { Post } from "@/app/interface/posts.interface";
import { convertFormat } from "@/app/utils/date";
type Props = {
  category: string;
  post: Post | null | undefined;
};

export default function PostItem({ category, post }: Props) {
  if (!post || post === null) {
    return <></>;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      ></link>
      <article className="prose max-w-screen-md dark:prose-invert mx-auto post-article break-words">
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post.title}`}</h1>
          <h3 className="ml-auto text-right mt-2 text-base">
            <time>{convertFormat(post.date)}</time>
          </h3>
          {post.body}
        </Suspense>
      </article>
      {/* <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside> */}
    </>
  );
}
