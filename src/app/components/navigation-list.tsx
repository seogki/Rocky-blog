"use client";

import Link from "next/link";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { memo, useEffect, useState } from "react";
import { setPath } from "../redux/features/commonSlice";
type Props = {
  defaultPath: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: string[];
};

type LinkProps = {
  children: React.JSX.Element | string;
  href: string;
  path: string;
  onClick?: React.MouseEventHandler;
};

const NavLink = ({ children, onClick, href, path }: LinkProps) => {
  return (
    <>
      <li
        className={`text-sm p-2 m-4 ml-2 sm:m-2 border-2 border-transparent rounded-md font-medium ${
          path === children &&
          "border-2 bg-teal-600 dark:bg-teal-400 border-teal-600 dark:border-teal-400 text-white dark:text-black"
        }`}
        onClick={onClick}
      >
        <Link href={href}>
          <p className="pr-1">{children}</p>
        </Link>
      </li>
    </>
  );
};

export default function NavigationList({
  className,
  onClick,
  list,
  defaultPath
}: Props) {
  const { isDrawerOpen } = useAppSelector(({ headerReducer }) => headerReducer);
  const { path } = useAppSelector(({ commonReducer }) => commonReducer);
  const dispatch = useAppDispatch();

  const handleClick = (myPath: string) => {
    if (isDrawerOpen) dispatch(closeDrawer());
    dispatch(setPath(myPath));
  };

  useEffect(() => {
    dispatch(setPath(defaultPath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul>
        {list?.map((item, idx) => (
          <NavLink
            key={idx}
            href={`/posts/${item}`}
            path={path}
            onClick={() => handleClick(item)}
          >
            {item}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
