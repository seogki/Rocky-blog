"use client";

import useDebounce from "@/hooks/useDebounce";
import { Post, PostByTitle } from "@/interface/posts.interface";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import PostCreateTime from "../post/contents/post-create-time";
import { convertFormat } from "@/utils/date";
import Link from "next/link";
import { useMount } from "@/hooks/useMount";
import PostTagLink from "../post/contents/post-tag-link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  sortPosts?: PostByTitle;
  close: () => void;
};

export default function HeaderSearchModal({ sortPosts, close }: Props) {
  const [value, setValue] = useState("");
  const [matchPosts, setMatchPosts] = useState<(Post | undefined)[]>([]);
  const [matchTags, setMatchTags] = useState<string[]>([]);
  const debouncedValue = useDebounce(value, 300);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMount } = useMount();
  const pathName = usePathname();
  const [curPathName, setCurPathName] = useState(pathName);

  useEffect(() => {
    if (debouncedValue) {
      const list = Array.from(
        new Set(debouncedValue.toLocaleLowerCase().split(" "))
      ).filter((value) => value !== "");

      //   console.debug("input List", list);

      if (!sortPosts) return;

      const posts = list
        .map((value) => {
          const keys = Object.keys(sortPosts!!);
          const regex = new RegExp(value, "gi");
          const isValueInclude = keys.filter((key) => key.match(regex));
          if (isValueInclude.length > 0) return isValueInclude;
        })
        .flat()
        .filter((value) => value !== undefined)
        .map((value) => sortPosts[value!!])
        .flat();

      //   console.debug(posts);

      const obj: any = {};
      let highestRank = 1;

      for (const post of posts) {
        if (!post) continue;
        if (!obj[post.slug]) {
          obj[post.slug] = { num: 1, post: post };
          continue;
        }

        obj[post.slug].num++;
        const num = obj[post.slug].num;

        if (num > highestRank) {
          highestRank = num;
        }
      }

      const tmpList: string[] = [];

      let matchRankList: string[] = [];

      if (highestRank === 1) {
        matchRankList = Object.keys(obj).filter(
          (key) => obj[key].num === highestRank
        );
      } else {
        matchRankList = Object.keys(obj).filter(
          (key) => obj[key].num === highestRank
        );
      }

      tmpList.push(...matchRankList);

      const rankList: Post[] = tmpList.map((value) => obj[value].post);

      const tags = Array.from(
        new Set(rankList.map((post) => post!.tags).flat())
      );
      setMatchPosts(rankList);
      setMatchTags(tags);
    }
  }, [debouncedValue, sortPosts]);

  useEffect(() => {
    if (isMount && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMount]);

  useEffect(() => {
    if (pathName !== curPathName) {
      setCurPathName(pathName);
      close();
    }
  }, [pathName, close, curPathName]);

  return (
    <div className="overflow-y-auto h-full w-full fixed mx-auto top-0 left-0 bg-zinc-800/50 flex justify-center items-start">
      <div className="w-[calc(100%-2rem)] min-h-[500px] max-w-screen-sm p-4 my-8 mx-4 mx-auto rounded-lg border-2 dark:bg-zinc-800 bg-zinc-300 border-zinc-600 dark:border-zinc-700">
        <MdClose
          className="ml-auto text-2xl sm:text-3xl mb-2 cursor-pointer"
          onClick={() => close()}
        />
        <input
          ref={inputRef}
          className="w-full py-2 px-4 outline outline-transparent placeholder:italic text-base rounded-lg"
          placeholder="please type anything..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <main>
          <h2 className="text-base my-4 font-semibold">
            {value === "" ? "Search Result" : `Search Result: ${value}`}
          </h2>
          {matchTags.length > 0 && (
            <section>
              <h3 className="text-sm my-4 font-medium">By tags</h3>
              <div className="flex justify-start flex-wrap text-sm p-2 md:mt-4">
                {matchTags.map((tag, idx) => (
                  <PostTagLink key={idx} tag={tag} />
                ))}
              </div>
            </section>
          )}
          {matchPosts.length > 0 && (
            <section>
              <h3 className="text-sm my-4 font-medium">By titles</h3>
              {matchPosts.map((post, idx) => (
                <p
                  key={idx}
                  className="m-2 py-1 text-sm font-normal truncate mr-4 cursor-pointer text-zinc-600 dark:text-zinc-300 hover:text-black hover:dark:text-white"
                >
                  <Link
                    href={{
                      pathname: `/posts/${post?.category}/${post?.slug}`
                    }}
                  >
                    {post?.title}
                  </Link>
                </p>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
