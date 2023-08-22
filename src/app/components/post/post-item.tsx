import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/app/interface/posts.interface";
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
      <article className="prose max-w-screen-md dark:prose-invert mx-auto post-article break-words">
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          <h1 className="text-center mt-4 lg:mt-8">{`[${category}] ${post.title}`}</h1>
          <time className="text-right mt-2 text-base">{post.date}</time>
          {post.body}
        </Suspense>
      </article>
      {/* <aside className="hidden lg:block absolute right-0 top-0">
        lg일때만 show
      </aside> */}
    </>
  );
}
