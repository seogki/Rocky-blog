import useDebounce from "@/hooks/useDebounce";
import { Post, PostByTitle } from "@/interface/posts.interface";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { useMount } from "@/hooks/useMount";
import PostTagLink from "../post/contents/post-tag-link";
import React from "react";
import { usePathname } from "next/navigation";
import { toUniqueList } from "@/utils/list";
import CardInner from "../card/card-inner";
import Card from "../card/card";
import PostTitleLink from "../post/contents/post-title-link";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { EnterMotion, FadeTweenMotion, ScaleTweenMotion } from "@/data/motion";

type Props = {
  sortPosts?: PostByTitle;
  closeModal: () => void;
};

type DuplicatePost = {
  [index: string]: {
    num: number;
    post: Post;
  };
};

export default function HeaderSearchModal({ sortPosts, closeModal }: Props) {
  const pathName = usePathname();
  const { isMount } = useMount();

  const [value, setValue] = useState("");
  const [matchPosts, setMatchPosts] = useState<Post[]>([]);
  const [matchTags, setMatchTags] = useState<string[]>([]);
  const [curPathName, setCurPathName] = useState(pathName);

  const debouncedValue = useDebounce(value, 300);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (debouncedValue) {
      const list = toUniqueList(
        debouncedValue.trim().toLocaleLowerCase().split(" ")
      );

      if (!sortPosts) return;

      const filterIncludeKeyByUserInput = (text: string) => {
        return Object.keys(sortPosts!!).filter((key) =>
          key.match(new RegExp(text, "gi"))
        );
      };

      const getPostsByKey = (key: string) => sortPosts[key]!!;

      const posts = list
        .map(filterIncludeKeyByUserInput)
        .flat()
        .map(getPostsByKey)
        .flat();

      const obj: DuplicatePost = {};

      for (const post of posts) {
        const { slug } = post;
        obj[slug] ? obj[slug].num++ : (obj[slug] = { num: 1, post: post });
      }

      const ranks = Object.keys(obj)
        .sort((a, b) => obj[b].num - obj[a].num)
        .map((key) => obj[key].post);

      const tags = toUniqueList(ranks.map((post) => post!.tags).flat());

      setMatchPosts(ranks);
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
      closeModal();
    }
  }, [pathName, closeModal, curPathName]);

  return (
    <motion.div
      // {...FadeTweenMotion}
      data-testid="header-search-modal"
      className="overflow-y-auto h-full w-full fixed mx-auto top-0 left-0 bg-zinc-800/70 dark:bg-zinc-500/70 flex justify-center items-start"
    >
      <Card
        {...FadeTweenMotion}
        className="w-[calc(100%-2rem)] min-h-[300px] max-w-screen-sm p-4 my-8 mx-4 mx-auto"
      >
        <div className="flex flex-row justify-between align-center pb-2">
          <h2 className="text-base font-bold">Search</h2>
          <MdClose
            className="text-2xl text-zinc-600 dark:text-zinc-300 sm:text-3xl cursor-pointer text-zinc-400 dark:text-zinc-600 hover:text-black hover:dark:text-white"
            onClick={() => closeModal()}
          />
        </div>
        <input
          ref={inputRef}
          className="w-full py-2 px-4 outline bg-zinc-100 placeholder-zinc-500 dark:bg-zinc-700 hover:outline-violet-500 focus:outline-violet-500 outline-2 outline-zinc-400 dark:outline-zinc-600 placeholder:italic text-base rounded-lg"
          placeholder="Search for anything..."
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
            <SearchSection title={"Post Titles"}>
              {matchPosts.map((post, idx) => (
                <motion.p
                  {...EnterMotion}
                  transition={{
                    type: "tween",
                    delay: 0.1 * idx
                  }}
                  key={post.title}
                  className="py-1.5 font-medium text-default truncate cursor-pointer hover:text-black hover:dark:text-white hover:font-semibold"
                >
                  <PostTitleLink post={post} />
                </motion.p>
              ))}
            </SearchSection>
          )}
          {matchTags.length > 0 && (
            <SearchSection title={"Title Tags"}>
              <div className="flex justify-start flex-wrap py-1.5">
                {matchTags.map((tag, idx) => (
                  <PostTagLink
                    {...EnterMotion}
                    transition={{
                      type: "tween",
                      delay: 0.1 * idx
                    }}
                    key={tag}
                    tag={tag}
                  />
                ))}
              </div>
            </SearchSection>
          )}
        </main>
      </Card>
    </motion.div>
  );
}

const SearchSection = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <CardInner className="my-4 last:mb-0 first:mt-0 text-sm">
      <h4 className="text-sm pb-2 font-normal font-semibold">{title}</h4>
      {children}
    </CardInner>
  );
};
