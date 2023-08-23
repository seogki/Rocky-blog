import { Suspense } from "react";
import Loading from "../loading";
import { Post } from "@/app/interface/posts.interface";
import { convertFormat } from "@/app/utils/date";
import PostTags from "./post-tags";
import PostContainer from "./post-container";
import PostItem from "./post-item";
import PostItemAside from "./post-item-aside";

type Props = {
  category: string;
  className?: string;
  post: Post | null | undefined;
};

export default function PostItemContainer({
  category,
  post,
  className = ""
}: Props) {
  if (!post || post === null) {
    return <></>;
  }

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer
        className={`hidden sm:flex ${className}`}
        aside={<PostItemAside toc={post.toc} />}
      >
        <PostItem category={category} post={post} />
      </PostContainer>

      <PostItem
        category={category}
        post={post}
        className={`sm:hidden max-w-screen-md mx-auto`}
      />
    </>
  );
}
