import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/interface/posts.interface";
import { convertFormat } from "@/utils/date";
import PostTags from "./post-tags";
// import PostBody from "./post-body";
import dynamic from "next/dynamic";
import PostBodySkeleton from "../skeleton/post-body-skeleton";

type Props = {
  category: string;
  post: Post | null | undefined;
  className?: string;
};

const PostBody = dynamic(() => import("./post-body"));

export default function PostItem({ category, post, className = "" }: Props) {
  if (!post || post === null) {
    return <></>;
  }

  return (
    <>
      <article
        className={`${className} post-article prose dark:prose-invert break-words max-w-max sm:mx-4`}
      >
        <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post.title}`}</h1>
        <div className="flex justify-center flex-wrap text-sm py-4">
          <PostTags tags={post.tags} />
        </div>
        <div className="ml-auto text-right text-base pt-4 pb-2">
          <time>{convertFormat(post.date)}</time>
        </div>

        <div className="ml-auto text-right text-base pb-4">
          <strong>📖 {post.minutesRead}</strong>
        </div>
        <Suspense fallback={<PostBodySkeleton />}>
          <PostBody body={post.body} />
        </Suspense>
        {/* {post.body} */}
      </article>
    </>
  );
}
