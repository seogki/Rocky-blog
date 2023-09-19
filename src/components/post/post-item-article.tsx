import { Suspense } from "react";
import { Post, PostHolder } from "@/interface/posts.interface";
import PostBodySkeleton from "../skeleton/post-item-article-skeleton";
import PostCreateTime from "./contents/post-create-time";
import PostReadMinute from "./contents/post-read-minute";
import PostTags from "./contents/post-tags";
import dynamic from "next/dynamic";

type Props = {
  category: string;
  holder: PostHolder | undefined;
  className?: string;
};

const PostScroll = dynamic(() => import("./contents/post-scroll"), {
  ssr: false
});

const PostItemMore = dynamic(() => import("./post-item-more"), {
  ssr: false
});

export default function PostItemArticle({
  category,
  holder,
  className = ""
}: Props) {
  if (!holder || !holder?.current || holder.current === null) {
    return <p>Post is not available</p>;
  }

  const { prev, current, next } = holder;

  return (
    <>
      <PostScroll />
      <article
        className={`${className} post-article prose lg:prose-lg dark:prose-invert break-words max-w-max sm:mx-4 lg:prose-h1:text-4xl prose-h1:text-3xl`}
      >
        <h1
          className="text-center mt-4 lg:mt-8"
          role="heading"
        >{`[${category}] ${current.title}`}</h1>
        <ul className="flex justify-center flex-wrap text-sm py-4 not-prose">
          <PostTags tags={current.tags} />
        </ul>
        <div className="ml-auto text-right text-base pt-4 pb-2">
          <PostCreateTime date={current.date} />
        </div>

        <div className="ml-auto text-right text-base pb-4">
          <PostReadMinute min={current.minutesRead} />
        </div>
        <Suspense fallback={<PostBodySkeleton />}>{current.body}</Suspense>

        <div className="not-prose flex flex-row justify-between items-start mt-16 pb-8">
          {prev && (
            <PostItemMore className={"mr-auto"} title={"Prev"} post={prev} />
          )}
          {next && (
            <PostItemMore className={"ml-auto"} title={"Next"} post={next} />
          )}
        </div>
      </article>
    </>
  );
}
