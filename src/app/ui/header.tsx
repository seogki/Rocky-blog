import { MdSearch, MdMoreVert } from "react-icons/md";
import HeaderTabs from "./header-tabs";
import Link from "next/link";
import HeaderNav from "./header-nav";

export default function MyHeader() {
  return (
    <>
      <header className="bg-white h-16 w-full shadow-lg px-4 py-4 sticky top-0 z-10">
        <div className="max-w-screen-xl flex justify-start items-center mx-auto">
          <div className="sm:hidden">
            <HeaderNav />
          </div>
          <h1 className="font-sans text-2xl font-bold">
            <Link href={"/"}>Rocky Blog</Link>
          </h1>
          <div className="hidden lg:block lg:ml-auto">
            <HeaderTabs />
          </div>
          <MdSearch className="text-2xl mr-2 ml-auto lg:ml-24" />
          <div className="block lg:hidden">
            <MdMoreVert className="text-2xl" />
          </div>
        </div>
      </header>
    </>
  );
}
