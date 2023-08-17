"use client";

import Link from "next/link";
import { Category } from "../interface/posts.interface";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: string[];
};

export default function NavigationList({ className, onClick, list }: Props) {
  const { isDrawerOpen } = useAppSelector(({ headerReducer }) => headerReducer);
  const dispatch = useAppDispatch();

  const closeAllOpener = () => {
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul>
        <li className="text-sm py-4 px-4">
          <Link href={`/posts/RECENT`} onClick={() => closeAllOpener()}>
            RECENT
          </Link>
        </li>
        {list?.map((item, idx) => (
          <li key={idx} className="text-sm py-4 px-4">
            <Link href={`/posts/${item}`} onClick={() => closeAllOpener()}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
