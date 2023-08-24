import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/interface/posts.interface";
import { convertFormat } from "@/utils/date";
import PostTags from "./post-tags";

type Props = {
  category: string;
  post: Post | null | undefined;
  className?: string;
};

export default function PostItem({ category, post, className = "" }: Props) {
  if (!post || post === null) {
    return <></>;
  }

  return (
    <>
      <article
        className={`${className} post-article prose dark:prose-invert break-words max-w-max sm:mx-8`}
      >
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
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

          {post.body}
        </Suspense>
      </article>
    </>
  );
}
