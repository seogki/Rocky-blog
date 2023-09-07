import { Suspense } from "react";
import { Post } from "@/interface/posts.interface";
import PostBodySkeleton from "../skeleton/post-body-skeleton";
import PostCreateTime from "./contents/post-create-time";
import PostReadMinute from "./contents/post-read-minute";
import PostBody from "./post-body";
import PostTags from "./contents/post-tags";

type Props = {
  category: string;
  post: Post | null | undefined;
  className?: string;
};

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
          <PostCreateTime date={post.date} />
        </div>

        <div className="ml-auto text-right text-base pb-4">
          <PostReadMinute min={post.minutesRead} />
        </div>
        <Suspense fallback={<PostBodySkeleton />}>
          <PostBody body={post.body} />
        </Suspense>
      </article>
    </>
  );
}
