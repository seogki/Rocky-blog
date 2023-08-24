"use client";

import { useMount } from "@/hooks/useMount";
import { Toc } from "@/interface/posts.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toc: Toc[];
};

export default function PostItemAside({ toc }: Props) {
  const pathname = usePathname();
  const { isMount } = useMount();

  const setIndent = (parent: string) => {
    if (parent === "h2") return "ml-1 font-medium";
    if (parent === "h3") return "ml-2 font-normal";
    if (parent === "h4") return "ml-3 font-light";
    if (parent === "h5") return "ml-4 font-light";
    if (parent === "h6") return "ml-5 font-light";
  };

  const addDashIfNotH1H2 = (parent: string, text: string) => {
    if (parent !== "h1" && parent !== "h2") return `- ${text}`;

    return text;
  };

  return (
    <>
      <aside className="basis-3/12 hidden lg:block ml-8">
        <div className="fixed bg-zinc-100 dark:bg-zinc-800 mt-48 mr-4 drop-shadow-md">
          <section className="max-w-[250px] max-h-[450px] overscroll-contain rounded-b-lg py-2 overflow-auto xl:pr-8 pl-4 pr-4">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold text-lg border-b-2 border-black dark:border-white pb-1 w-fit">
              Table of Contents
            </h2>
            <ul>
              {toc.map((item) => (
                <li key={item.text}>
                  <Link
                    href={`${pathname}/${item.href}`}
                    shallow
                    className={`text-sm xl:text-base`}
                  >
                    <p
                      className={`${setIndent(
                        item.parent
                      )} py-2 my-2 hover:text-teal-600 dark:hover:text-teal-400`}
                    >
                      {addDashIfNotH1H2(item.parent, item.text)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-b-lg h-10 bg-zinc-200 dark:bg-zinc-700"></section>
        </div>
      </aside>
    </>
  );
}
