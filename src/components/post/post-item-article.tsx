import { Suspense } from "react";
import { Post, PostIndex } from "@/interface/posts.interface";
import PostBodySkeleton from "../skeleton/post-item-article-skeleton";
import PostCreateTime from "./contents/post-create-time";
import PostReadMinute from "./contents/post-read-minute";
import PostTags from "./contents/post-tags";
import Link from "next/link";
import dynamic from "next/dynamic";

type Props = {
  category: string;
  obj: PostIndex | undefined;
  className?: string;
};

const PostScroll = dynamic(() => import("./contents/post-scroll"), {
  ssr: false
});

export default function PostItemArticle({
  category,
  obj,
  className = ""
}: Props) {
  if (!obj || !obj?.current || obj.current === null) {
    return <p>Post is not available</p>;
  }

  const { prev, current, next } = obj;

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
            <PostLink className={"mr-auto"} title={"Prev"} post={prev} />
          )}
          {next && (
            <PostLink className={"ml-auto"} title={"Next"} post={next} />
          )}
        </div>
      </article>
    </>
  );
}

const PostLink = ({
  post,
  title,
  className = ""
}: {
  post: Post;
  title: string;
  className: string;
}) => {
  return (
    <>
      <div
        className={`${className} group px-4 py-3 w-5/12 md:w-4/12 not-prose`}
      >
        <Link href={`/posts/${post.category}/${post.slug}`}>
          <h4 className="sm:text-base md:my-1 font-semibold group-hover:text-violet-500">
            {title}
          </h4>
          <h5 className="text-sm text-zinc-500 mb-1">By category</h5>
          <h6 className="break-word line-clamp-3 text-sm">{post.title}</h6>
        </Link>
      </div>
    </>
  );
};
