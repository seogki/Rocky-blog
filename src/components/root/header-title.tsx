"use client";

import { closeAll, closeDrawer, closeMore } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function HeaderTitle() {
  const dispatch = useAppDispatch();

  const closeAllOpener = () => {
    dispatch(closeAll());
  };

  return (
    <>
      <Link
        href={"/"}
        onClick={() => closeAllOpener()}
        className={"hover:text-teal-600 dark:hover:text-teal-400"}
      >
        Rocky Blog
      </Link>
    </>
  );
}
