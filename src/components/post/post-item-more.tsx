"use client";

import { Post } from "@/interface/posts.interface";
import Link from "next/link";

type Props = {
  post: Post;
  title: string;
  className: string;
};

export default function PostItemMore({ post, title, className = "" }: Props) {
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
}
