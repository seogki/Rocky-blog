"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { ForwardedRef } from "react";

type Props = {
  tag: string;
  onClick?: React.MouseEventHandler;
};

function PostTagLink(
  { tag, onClick }: Props,
  ref?: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <>
      <Link
        ref={ref}
        key={tag}
        href={{ pathname: `/posts`, query: { tag } }}
        className="mx-1 my-1 first-of-type:ml-0 last-of-type:mr-0"
        onClick={onClick}
      >
        <div
          key={tag}
          className="text-default py-1 px-3 rounded-2xl border-2 border-zinc-500 hover:border-violet-500 hover:dark:border-violet-500 hover:bg-violet-500 hover:text-white"
        >
          {tag}
        </div>
      </Link>
    </>
  );
}

export default motion(React.forwardRef<HTMLAnchorElement, Props>(PostTagLink));
