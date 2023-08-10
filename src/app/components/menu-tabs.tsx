"use client";
import Link from "next/link";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function MenuTabs() {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();

  const closeAllOpener = () => {
    if (isMore) dispatch(closeMore());
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav className="lg:ml-auto">
      <ul className="flex flex-wrap flex-col lg:flex-row">
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0 w-full lg:w-auto">
          <Link href={"/posts"} onClick={() => closeAllOpener()}>
            Posts
          </Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0 w-full lg:w-auto">
          <Link href={"/edit"} onClick={() => closeAllOpener()}>
            Edit
          </Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0 w-full lg:w-auto">
          <Link href={"/setting"} onClick={() => closeAllOpener()}>
            Setting
          </Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0 w-full lg:w-auto">
          <Link href={"/about"} onClick={() => closeAllOpener()}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
