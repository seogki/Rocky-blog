"use client";

import { Toc } from "@/interface/posts.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toc: Toc[];
};

export default function PostItemAside({ toc }: Props) {
  const pathname = usePathname();
  return (
    <>
      <aside className="basis-3/12 hidden lg:block ml-4 border-l-2 border-zinc-100 dark:border-zinc-800">
        <div className="fixed mt-16 mr-4 drop-shadow-md">
          <section className="text-default max-w-[250px] max-h-[350px] overscroll-contain rounded-b-lg py-2 overflow-auto px-4">
            <h2 className="font-bold text-base border-b-2 border-zinc-200 dark:border-zinc-700 pb-1 w-fit">
              📄 Table of Contents
            </h2>
            <TocList toc={toc} pathname={pathname} />
          </section>
        </div>
      </aside>
    </>
  );
}

const TocList = ({ toc, pathname }: { toc: Toc[]; pathname: string }) => {
  const setIndent = (parent: string) => {
    if (parent === "h2" || parent === "h1")
      return "ml-2 font-normal text-sm xl:text-base";
    if (parent === "h3") return "ml-4 font-light text-xs xl:text-sm";
    if (parent === "h4") return "ml-6 font-light text-xs xl:text-sm";
    if (parent === "h5") return "ml-8 font-extralight text-xs xl:text-sm";
    if (parent === "h6") return "ml-10 font-extralight text-xs xl:text-sm";
  };

  const addPrefix = (parent: string, text: string) => {
    if (parent === "h4" || parent === "h6") return `- ${text}`;
    if (parent === "h3" || parent === "h5") return `· ${text}`;
    return text;
  };

  return (
    <ul>
      {toc.map((item, idx) => (
        <li key={idx}>
          <Link href={`${pathname}/${item.href}`} shallow>
            <p
              role="paragraph"
              className={`${setIndent(
                item.parent!!
              )} py-1 my-2 text-primary-hover`}
            >
              {addPrefix(item.parent!!, item.text)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
