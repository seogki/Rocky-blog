import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/interface/posts.interface";
import { convertFormat } from "@/utils/date";
import PostTags from "./post-tags";
import PostBody from "./post-body";
import dynamic from "next/dynamic";
import PostBodySkeleton from "../skeleton/post-body-skeleton";

type Props = {
  category: string;
  post: Post | null | undefined;
  className?: string;
};

// const PostBody = dynamic(() => import("./post-body"), {
//   loading: () => <PostBodySkeleton />
// });

export default function PostItem({ category, post, className = "" }: Props) {
  if (!post || post === null) {
    return <p>Post is not available</p>;
  }

  return (
    <>
      <article
        className={`${className} post-article prose lg:prose-lg dark:prose-invert break-words max-w-max sm:mx-4 lg:prose-h1:text-4xl prose-h1:text-3xl`}
      >
        <h1
          className="text-center mt-4 lg:mt-8"
          role="heading"
        >{`[${category}] ${post.title}`}</h1>
        <ul className="flex justify-center flex-wrap text-sm py-4 not-prose">
          <PostTags tags={post.tags} />
        </ul>
        <div className="ml-auto text-right text-base pt-4 pb-2">
          <time>{convertFormat(post.date)}</time>
        </div>

        <div className="ml-auto text-right text-base pb-4">
          <strong>📖 {post.minutesRead}</strong>
        </div>
        <Suspense fallback={<PostBodySkeleton />}>
          <PostBody body={post.body} />
        </Suspense>
      </article>
    </>
  );
}
