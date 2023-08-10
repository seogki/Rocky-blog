import { MdSearch } from "react-icons/md";
import MenuTabs from "../components/menu-tabs";
import Link from "next/link";
import HeaderMore from "./header-more";
import HeaderNav from "./header-nav";
import ThemeModifier from "../components/theme-modifier";

export default function MyHeader({ className }: { className?: string }) {
  return (
    <>
      <header
        className={`${className} bg-white dark:bg-zinc-800 h-16 w-full shadow-lg px-4 py-4 sticky top-0 z-10`}
      >
        <div className="max-w-screen-xl flex justify-start items-center mx-auto">
          <div className="sm:hidden">
            <HeaderNav />
          </div>
          <h1 className="font-sans text-2xl font-bold">
            <Link href={"/"}>Rocky Blog</Link>
          </h1>
          <div className="hidden lg:block lg:ml-auto">
            <MenuTabs />
          </div>
          <MdSearch className="text-2xl mr-3 ml-auto lg:ml-10" />
          <ThemeModifier />
          <div className="block lg:hidden">
            <HeaderMore />
          </div>
        </div>
      </header>
    </>
  );
}
