"use client";

import Link from "next/link";
import { closeDrawer, closeMore } from "./redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function HeaderTitle() {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();

  const closeAllOpener = () => {
    if (isMore) dispatch(closeMore());
    if (isDrawerOpen) dispatch(closeDrawer());
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
