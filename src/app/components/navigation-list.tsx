"use client";

import Link from "next/link";
import { Category } from "../interface/posts.interface";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { usePathname } from "next/navigation";
import { memo, useState } from "react";
import { getCategories } from "../data";
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
  // const pathname = usePathname();
  // console.debug(pathname);

  return (
    <>
      <li className={`text-sm p-4 ${path === children && "text-green-400"}`}>
        <Link href={href} onClick={onClick}>
          {children}
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
  const [path, setPath] = useState(defaultPath);
  const dispatch = useAppDispatch();

  const handleClick = (path: string) => {
    if (isDrawerOpen) dispatch(closeDrawer());
    setPath(path);
  };

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
