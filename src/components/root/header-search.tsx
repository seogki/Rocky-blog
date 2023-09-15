"use client";

import { sortPostsByTitle } from "@/data/sort";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import { Post, PostByTitle } from "@/interface/posts.interface";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useState } from "react";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
import { useMount } from "@/hooks/useMount";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { AnimatePresence, motion } from "framer-motion";

const HeaderSearchModal = dynamic(() => import("./header-search-modal"), {
  ssr: false
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

  useEffect(() => {
    const list = sortPostsByTitle(posts);
    setSortPosts(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMount) {
    return (
      <FaSpinner className="animate-spin ml-auto lg:ml-0 cursor-pointer mr-3 text-black/50 dark:text-white/50" />
    );
  }

  return (
    <>
      <MdSearch
        data-testid="search-btn"
        className="ml-auto lg:ml-0 text-2xl mx-2 text-primary-hover"
        onClick={() => setOpenModal(true)}
      />
      <AnimatePresence initial={false}>
        {openModal && (
          <HeaderSearchModal
            data-testid="modal"
            sortPosts={sortPosts}
            closeModal={() => setOpenModal(false)}
          ></HeaderSearchModal>
        )}
      </AnimatePresence>
    </>
  );
}
