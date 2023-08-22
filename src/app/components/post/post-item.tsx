import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/app/interface/posts.interface";
import { convertFormat } from "@/app/utils/date";
import PostTags from "./post-tags";

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
      <article
        className={`prose max-w-screen-md dark:prose-invert mx-auto post-article break-words`}
      >
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post.title}`}</h1>
          <p className="flex justify-center text-sm">
            <PostTags tags={post.tags} />
          </p>
          <p className="ml-auto text-right text-base">
            <time>{convertFormat(post.date)}</time>
          </p>
          {post.body}
        </Suspense>
      </article>
      {/* <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside> */}
    </>
  );
}
