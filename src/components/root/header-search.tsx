"use client";

import { splitPostsByTitle } from "@/data/split";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import { Post } from "@/interface/posts.interface";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
import { useMount } from "@/hooks/useMount";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import ModalRoot from "../modal/modal-root";

const HeaderSearchModal = dynamic(() => import("./header-search-modal"), {
  ssr: false
});

type Props = {
  posts: Post[];
};

export default function HeaderSearch({ posts }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const postsPairedByTitle = useMemo(() => {
    return splitPostsByTitle(posts);
  }, [posts]);

  useToggleScrollbar(openModal);

  const { isMount } = useMount();

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
      <ModalRoot isMount={openModal}>
        <HeaderSearchModal
          postsPairedByTitle={postsPairedByTitle}
          closeModal={() => setOpenModal(false)}
        ></HeaderSearchModal>
      </ModalRoot>
    </>
  );
}
