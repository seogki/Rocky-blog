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
  const [matchPosts, setMatchPosts] = useState<Post[]>([]);
  const [matchTags, setMatchTags] = useState<string[]>([]);
  const debouncedValue = useDebounce(value, 300);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMount } = useMount();
  const pathName = usePathname();
  const [curPathName, setCurPathName] = useState(pathName);

  useEffect(() => {
    if (debouncedValue) {
      const list = toUniqueList(
        debouncedValue.trim().toLocaleLowerCase().split(" ")
      );

      if (!sortPosts) return;

      const filterIncludeKeyByUserInput = (text: string) => {
        const keys = Object.keys(sortPosts!!);
        return keys.filter((key) => key.match(new RegExp(text, "gi")));
      };

      const posts = list
        .map((text) => filterIncludeKeyByUserInput(text))
        .flat()
        .map((value) => sortPosts[value])
        .flat();

      const obj: any = {};
    
      for (const post of posts) {
        if (!post) continue;
        if (!obj[post.slug]) {
          obj[post.slug] = { num: 1, post: post };
          continue;
        }

        obj[post.slug].num++;
      }

      const rankList: Post[] = Object.keys(obj)
        .sort((a, b) => obj[b].num - obj[a].num)
        .map((key) => obj[key].post);

      const tags = toUniqueList(rankList.map((post) => post!.tags).flat());

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
      closeModal();
    }
  }, [pathName, closeModal, curPathName]);

  return (
    <div
      role="dialog"
      className="overflow-y-auto h-full w-full fixed mx-auto top-0 left-0 bg-zinc-800/70 dark:bg-zinc-500/70 flex justify-center items-start"
    >
      <div className="w-[calc(100%-2rem)] min-h-[300px] max-w-screen-sm p-4 my-8 mx-4 mx-auto rounded-lg dark:bg-zinc-800 bg-zinc-100">
        <div className="flex flex-row justify-between align-center pb-2">
          <h2 className="text-base">Search</h2>
          <MdClose
            className="text-2xl text-zinc-600 dark:text-zinc-300 sm:text-3xl cursor-pointer rounded-full hover:bg-zinc-500/50"
            onClick={() => closeModal()}
          />
        </div>
        <input
          ref={inputRef}
          className="inline w-full py-2 px-4 outline bg-zinc-200 placeholder-zinc-500 dark:bg-zinc-700 hover:outline-violet-500 focus:outline-violet-500 outline-2 outline-transparent placeholder:italic text-base rounded-lg"
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
            <SearchSection title={"Post Titles"}>
              {matchPosts.map((post, idx) => (
                <p
                  key={idx}
                  className="px-2 py-3 font-normal dark:text-zinc-300 text-zinc-600 truncate cursor-pointer hover:bg-zinc-500/20 hover:dark:bg-zinc-500/50 rounded-2xl"
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
            <SearchSection title={"Title Tags"}>
              <div className="flex justify-start flex-wrap p-2">
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
  return <h4 className="text-sm pb-2 font-normal font-semibold">{title}</h4>;
};

const SearchSection = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="p-4 rounded-lg my-4 first:mt-0 dark:bg-zinc-700 bg-zinc-200 text-sm">
      <SearchSectionTitle title={title} />
      {children}
    </section>
  );
};
