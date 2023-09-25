"use client";

import { closeAll } from "@/redux/features/headerSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";

export default function HeaderTitle() {
  const dispatch = useAppDispatch();

  // const closeAllDrawer = () => {
  //   dispatch(closeAll());
  // };

  return (
    <>
      <Link href={"/"} onClick={() => dispatch(closeAll())}>
        Rocky Blog
      </Link>
    </>
  );
}
