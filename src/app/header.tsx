import { MdSearch } from "react-icons/md";
import MenuTabList from "./components/menu/menu-tab-list";
import HeaderMore from "./header-more";
import HeaderNav from "./header-nav";
import ThemeModifier from "./components/theme-modifier";
import HeaderTitle from "./header-title";
import { getCategories } from "./data";

export default async function MyHeader({ className }: { className?: string }) {
  const categories = await getCategories();
  return (
    <>
      <header
        className={`${className} h-16 w-full shadow-lg px-4 py-4 sticky top-0 z-10 text-xl md:text-lg`}
      >
        <div className="max-w-screen-xl flex justify-start items-center mx-auto">
          <div className="sm:hidden">
            <HeaderNav categories={categories} />
          </div>
          <div className="font-sans font-bold">
            <HeaderTitle />
          </div>
          <div className="hidden lg:block lg:ml-auto">
            <MenuTabList />
          </div>
          {/* <MdSearch className="cursor-pointer mr-3 ml-auto lg:ml-10" /> */}
          <ThemeModifier />
          <div className="block lg:hidden">
            <HeaderMore />
          </div>
        </div>
      </header>
    </>
  );
}
