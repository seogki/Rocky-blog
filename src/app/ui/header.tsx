import { MdSearch } from "react-icons/md";
import MenuTabs from "../components/menu-tabs";
import HeaderMore from "./header-more";
import HeaderNav from "./header-nav";
import ThemeModifier from "../components/theme-modifier";
import { Category } from "../interface/posts.interface";
import HeaderTitle from "./header-title";

export default function MyHeader({
  className,
  list
}: {
  className?: string;
  list?: Category[];
}) {
  return (
    <>
      <header
        className={`${className} bg-white dark:bg-zinc-800 h-16 w-full shadow-lg px-4 py-4 sticky top-0 z-10`}
      >
        <div className="max-w-screen-xl flex justify-start items-center mx-auto">
          <div className="sm:hidden">
            <HeaderNav list={list} />
          </div>
          <h1 className="font-sans text-2xl font-bold">
            <HeaderTitle />
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
