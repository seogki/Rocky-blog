"use client";

import Link from "next/link";
import { closeDrawer } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useSearchParams } from "next/navigation";
import { Category } from "@/interface/posts.interface";
import React, { ForwardedRef } from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  stopPropagation?: React.MouseEventHandler;
  list?: Category[];
};

type LinkProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  closeOpenDrawer?: React.MouseEventHandler;
};

const NavLink = ({ children, closeOpenDrawer, href, isActive }: LinkProps) => {
  return (
    <li
      className={`text-primary-hover text-sm p-2 m-4 ml-2 sm:m-2 font-bold ${
        isActive ? "text-primary" : "text-default"
      }`}
      onClick={closeOpenDrawer}
    >
      <Link href={href}>
        <p className={`pr-1`}>{children}</p>
      </Link>
    </li>
  );
};

function NavigationList(
  { className, stopPropagation, list }: Props,
  ref?: ForwardedRef<HTMLElement>
) {
  const { isDrawerOpen } = useAppSelector(({ header }) => header);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const closeOpenDrawer = () => {
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav
      ref={ref}
      className={`${className}`}
      onClick={stopPropagation}
      key={"navigation-list"}
    >
      <ul className="sm:fixed">
        <NavLink
          key={"RECENT"}
          href={`/posts`}
          isActive={pathname === `/posts`}
          closeOpenDrawer={() => closeOpenDrawer()}
        >
          RECENT ({list?.reduce((a, b) => a + b.length, 0) || 0})
        </NavLink>
        {list?.map(({ name, length }, idx) => (
          <NavLink
            key={idx}
            href={`/posts/${name}`}
            isActive={pathname === `/posts/${name}`}
            closeOpenDrawer={() => closeOpenDrawer()}
          >
            {name} ({length})
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default motion(React.forwardRef<HTMLElement, Props>(NavigationList));
