"use client";

import { Toc } from "@/app/interface/posts.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toc: Toc[];
};

export default function PostItemAside({ toc }: Props) {
  const pathname = usePathname();

  const setIndent = (parent: string) => {
    if (parent === "h2") return "ml-1";
    if (parent === "h3") return "ml-2";
    if (parent === "h4") return "ml-3";
    if (parent === "h5") return "ml-4";
    if (parent === "h6") return "ml-5";
  };

  const addDashIfNotH2 = (parent:string, text:string) => {
    if(parent !== "h2" && parent !== "h2") return `- ${text}`;
    
    return text;
  }

  return (
    <>
      <aside className="basis-3/12 hidden lg:block ml-8">
        <ul className="fixed py-2 pl-4 pr-6 mt-64 max-w-[350px] max-h-[400px] overflow-auto">
          <h2 className="text-teal-600 dark:text-teal-400 font-bold text-lg border-b-2 pb-1 w-fit">Table of Contents</h2>
          {toc.map((item) => (
            <li key={item.text}>
              <Link
                href={`${pathname}/${item.href}`}
                shallow
                className={`text-sm xl:text-base`}
              >
                <p className={`${setIndent(item.parent)} py-2 my-2`}>{addDashIfNotH2(item.parent,item.text)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
