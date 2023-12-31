import MenuTabList from "@/components/menu/menu-tab-list";
import ThemeModifier from "@/components/theme-modifier";
import { getAllPostsOrderByDate, getCategories } from "@/data";
import HeaderMore from "./header-more";
import HeaderNav from "./header-nav";
import HeaderTitle from "./header-title";
import HeaderSearch from "./header-search";

type CacheProps = {
  className?: string;
};

export default async function MyHeader({ className = "" }: CacheProps) {
  const categories = await getCategories();
  const posts = await getAllPostsOrderByDate();

  return (
    <>
      <header
        className={`${className} h-16 w-full shadow-lg px-4 py-4 sticky z-10 top-0 text-xl md:text-lg overflow-hidden`}
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
          <HeaderSearch posts={posts} />
          <ThemeModifier />
          <div className="block lg:hidden">
            <HeaderMore />
          </div>
        </div>
      </header>
    </>
  );
}
