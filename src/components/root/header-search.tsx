"use client";

import { sortPostsByTitle } from "@/data/sort";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import { Post, PostByTitle } from "@/interface/posts.interface";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMount } from "@/hooks/useMount";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";

const HeaderSearchModal = dynamic(() => import("./header-search-modal"), {
  ssr: false,
});

type Props = {
  posts: Post[];
};

export default function HeaderSearch({ posts }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [sortPosts, setSortPosts] = useState<PostByTitle | undefined>(
    undefined
  );

  useToggleScrollbar(openModal);

  const { isMount } = useMount();

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const list = sortPostsByTitle(posts);
    setSortPosts(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMount)
    return (
      <FaSpinner className="animate-spin ml-auto lg:ml-0 cursor-pointer mr-3 text-black/50 dark:text-white/50" />
    );

  return (
    <>
      <MdSearch
        role="button"
        className="cursor-pointer ml-auto lg:ml-0 text-2xl mx-2 hover:text-teal-600 dark:hover:text-teal-400"
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {openModal && (
        <HeaderSearchModal
          sortPosts={sortPosts}
          closeModal={() => closeModal()}
        />
      )}
    </>
  );
}
