"use client";

import Link from "next/link";
import { closeDrawer } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: string[];
};

type LinkProps = {
  children: React.JSX.Element | string;
  href: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler;
};

const NavLink = ({ children, onClick, href, isActive }: LinkProps) => {
  return (
    <li
      className={`hover:text-teal-600 dark:hover:text-teal-400 text-sm p-2 m-4 ml-2 sm:m-2 border-2 border-transparent rounded-md font-bold ${
        isActive ? "text-teal-600 dark:text-teal-400" : "text-zinc-500"
      }`}
      onClick={onClick}
    >
      <Link href={href}>
        <p className="pr-1">{children}</p>
      </Link>
    </li>
  );
};

export default function NavigationList({ className, onClick, list }: Props) {
  const { isDrawerOpen } = useAppSelector(({ headerReducer }) => headerReducer);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const handleClick = () => {
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul className="sm:fixed">
        <NavLink
          key={"RECENT"}
          href={`/`}
          isActive={pathname === `/`}
          onClick={() => handleClick()}
        >
          RECENT
        </NavLink>
        {list?.map((item, idx) => (
          <NavLink
            key={idx}
            href={`/posts/${item}`}
            isActive={pathname === `/posts/${item}`}
            onClick={() => handleClick()}
          >
            {item}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
