"use client";

import { Toc } from "@/interface/posts.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toc: Toc[];
};

export default function PostItemAside({ toc }: Props) {
  const pathname = usePathname();

  const setIndent = (parent: string) => {
    if (parent === "h2" || parent === "h1")
      return "ml-2 font-normal text-sm xl:text-base";
    if (parent === "h3")
      return "ml-4 font-light text-xs xl:text-sm text-zinc-800 dark:text-zinc-200";
    if (parent === "h4")
      return "ml-6 font-light text-xs xl:text-sm text-zinc-700 dark:text-zinc-300";
    if (parent === "h5")
      return "ml-8 font-extralight text-xs xl:text-sm text-zinc-600 dark:text-zinc-400";
    if (parent === "h6")
      return "ml-10 font-extralight text-xs xl:text-sm text-zinc-500";
  };

  const addPrefix = (parent: string, text: string) => {
    if (parent === "h4" || parent === "h6") return `- ${text}`;
    if (parent === "h3" || parent === "h5") return `· ${text}`;
    // if (parent !== "h1" && parent !== "h2") return `- ${text}`;

    return text;
  };

  return (
    <>
      <aside className="basis-3/12 hidden lg:block ml-4">
        <div className="fixed mt-36 mr-4 drop-shadow-md ">
          <section className="max-w-[250px] max-h-[350px] overscroll-contain rounded-b-lg py-2 overflow-auto px-4">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold text-lg border-b-2 border-black dark:border-white pb-1 w-fit">
              📄 Table of Contents
            </h2>
            <ul>
              {toc.map((item, idx) => (
                <li key={idx}>
                  <Link href={`${pathname}/${item.href}`} shallow>
                    <p
                      className={`${setIndent(
                        item.parent
                      )} py-2 my-2 hover:text-teal-600 dark:hover:text-teal-400`}
                    >
                      {addPrefix(item.parent, item.text)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          {/* <section className="rounded-b-lg h-10 bg-zinc-200 dark:bg-zinc-700"></section> */}
        </div>
      </aside>
    </>
  );
}
