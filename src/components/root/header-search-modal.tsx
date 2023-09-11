"use client";

import useDebounce from "@/hooks/useDebounce";
import { Post, PostByTitle } from "@/interface/posts.interface";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Link from "next/link";
import { useMount } from "@/hooks/useMount";
import PostTagLink from "../post/contents/post-tag-link";
import React from "react";
import { usePathname } from "next/navigation";
import { toUniqueList } from "@/utils/list";

type Props = {
  sortPosts?: PostByTitle;
  closeModal: () => void;
};

export default function HeaderSearchModal({ sortPosts, closeModal }: Props) {
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
      const list = toUniqueList(
        debouncedValue.toLocaleLowerCase().split(" ")
      ).filter((value) => value !== "");

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

      // const tmpList: string[] = [];

      let matchRankList: string[] = [];

      // if (highestRank === 1) {
      //   matchRankList = Object.keys(obj).filter(
      //     (key) => obj[key].num === highestRank
      //   );
      // } else {
      //   matchRankList = Object.keys(obj).filter(
      //     (key) => obj[key].num === highestRank
      //   );
      // }
      matchRankList = Object.keys(obj).filter((key) => obj[key].num);

      console.debug(obj, matchRankList);

      const rankList: Post[] = matchRankList.map((value) => obj[value].post);

      const tags = Array.from(
        new Set(rankList.map((post) => post!.tags).flat())
      );
      setMatchPosts(rankList);
      setMatchTags(tags);

      console.debug(rankList, tags);
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
      closeModal();
    }
  }, [pathName, closeModal, curPathName]);

  return (
    <div
      role="dialog"
      className="overflow-y-auto h-full w-full fixed mx-auto top-0 left-0 bg-zinc-800/50 flex justify-center items-start"
    >
      <div className="w-[calc(100%-2rem)] max-w-screen-sm p-4 my-8 mx-4 mx-auto rounded-md border-2 dark:bg-zinc-800 bg-white border-zinc-500 dark:border-zinc-700">
        <header className="flex flex-row justify-between align-center pb-2">
          <h2 className="text-base">Search</h2>
          <MdClose
            className="text-2xl text-zinc-600 dark:text-zinc-300 sm:text-3xl cursor-pointer rounded-full hover:bg-zinc-500/30"
            onClick={() => closeModal()}
          />
        </header>
        <input
          ref={inputRef}
          className="w-full py-2 px-4 outline outline-violet-500 outline-2 placeholder:italic text-base rounded-lg"
          placeholder="please type anything..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <main>
          <h3 className="text-base mt-6 mb-4 font-semibold text-center text-zinc-600 dark:text-zinc-300">
            {value === ""
              ? "Search Anything..."
              : value !== "" && matchPosts.length < 1
              ? `No Search Result: ${value}`
              : `Search Result: ${value}`}
          </h3>
          {matchPosts.length > 0 && (
            <SearchSection title={"by Titles"}>
              {matchPosts.map((post, idx) => (
                <p
                  key={idx}
                  className="px-2 py-3 text-sm font-normal truncate mr-4 cursor-pointer hover:bg-zinc-500/50 rounded-2xl"
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
            </SearchSection>
          )}
          {matchTags.length > 0 && (
            <SearchSection title={"by Tags"}>
              <div className="flex justify-start flex-wrap text-sm p-2 md:mt-4">
                {matchTags.map((tag, idx) => (
                  <PostTagLink key={idx} tag={tag} />
                ))}
              </div>
            </SearchSection>
          )}
        </main>
      </div>
    </div>
  );
}

const SearchSectionTitle = ({ title }: { title: string }) => {
  return <h4 className="text-sm mb-2 font-normal">{title}</h4>;
};

const SearchSection = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="p-4 border-2 rounded-lg border-zinc-400 dark:border-zinc-600 my-4 first:mt-0 dark:bg-zinc-700 bg-zinc-300">
      <SearchSectionTitle title={title} />
      {children}
    </section>
  );
};
