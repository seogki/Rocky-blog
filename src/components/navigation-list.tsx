"use client";

import Link from "next/link";
import { closeDrawer } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useSearchParams } from "next/navigation";
import { Category } from "@/interface/posts.interface";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: Category[];
};

type LinkProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler;
};

const NavLink = ({ children, onClick, href, isActive }: LinkProps) => {
  return (
    <li
      className={`text-primary-hover text-sm p-2 m-4 ml-2 sm:m-2 font-bold ${
        isActive ? "text-primary" : "text-default"
      }`}
      onClick={onClick}
    >
      <Link href={href}>
        <p className={`pr-1`}>{children}</p>
      </Link>
    </li>
  );
};

export default function NavigationList({ className, onClick, list }: Props) {
  const { isDrawerOpen } = useAppSelector(({ header }) => header);
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
          href={`/posts`}
          isActive={pathname === `/posts`}
          onClick={() => handleClick()}
        >
          RECENT ({list?.reduce((a, b) => a + b.length, 0)})
        </NavLink>
        {list?.map((item, idx) => (
          <NavLink
            key={idx}
            href={`/posts/${item.name}`}
            isActive={pathname === `/posts/${item.name}`}
            onClick={() => handleClick()}
          >
            {item.name} ({item.length})
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
