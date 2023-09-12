import MenuTabList from "@/components/menu/menu-tab-list";
import ThemeModifier from "@/components/theme-modifier";
import { getAllPostsOrderByDate, getCategories } from "@/data";
import HeaderMore from "./header-more";
import HeaderNav from "./header-nav";
import HeaderTitle from "./header-title";
import HeaderSearch from "./HeaderSearch";

type Props = {
  className?: string;
};

export default async function MyHeader({ className = "" }: Props) {
  const categories = await getCategories();
  const posts = await getAllPostsOrderByDate();

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
