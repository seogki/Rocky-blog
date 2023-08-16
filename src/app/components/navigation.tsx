"use client";

import Link from "next/link";
import { Category } from "../interface/posts.interface";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: Category[];
};

export default function Navigation({ className, onClick, list }: Props) {
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
        {list?.map(({ _id, name }) => (
          <li key={_id} className="text-sm py-4 px-4">
            <Link href={`/posts/${name}`} onClick={() => closeAllOpener()}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
