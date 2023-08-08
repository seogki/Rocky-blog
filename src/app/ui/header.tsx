"use client";
import { MdMenu, MdSearch, MdMoreVert } from "react-icons/md";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { useLayoutEffect, useState } from "react";
import HeaderTabs from "./header-tabs";
import Link from "next/link";

export default function MyHeader() {
  const [isBwSm, setIsBwSm] = useState<boolean>(false);
  const [isAbLg, setIsAbLg] = useState<boolean>(false);
  const [isBwLg, setIsBwLg] = useState<boolean>(false);
  const { isBelowSm } = useBreakpoint("sm");
  const { isAboveLg, isBelowLg } = useBreakpoint("lg");

  useLayoutEffect(() => {
    setIsBwSm(isBelowSm);
    setIsAbLg(isAboveLg);
    setIsBwLg(isBelowLg);
  }, [isBelowSm, isAboveLg, isBelowLg]);

  return (
    <>
      <header className="bg-white h-16 w-full shadow-lg px-6 py-4 sticky top-0 z-10">
        <div className="max-w-screen-2xl flex justify-start items-center m-auto">
          {isBwSm && <MdMenu className="text-2xl mr-2" />}
          <h1 className="font-sans text-2xl font-bold">
            {" "}
            <Link href={"/"}>Rocky Blog</Link>
          </h1>
          {isAbLg && <HeaderTabs />}
          <MdSearch className="text-2xl mr-2 ml-auto lg:ml-24" />
          {isBelowLg && <MdMoreVert className="text-2xl" />}
        </div>
      </header>
    </>
  );
}
