"use client";

import { Toc } from "@/app/interface/posts.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  toc: Toc[];
};

export default function PostItemAside({ toc }: Props) {
  const pathname = usePathname();

  const setIndent = (header: string) => {
    if (header === "h2") return "ml-1";
    if (header === "h3") return "ml-2";
    if (header === "h4") return "ml-3";
    if (header === "h5") return "ml-4";
    if (header === "h6") return "ml-5";
  };

  return (
    <>
      <aside className="basis-3/12 hidden sm:block">
        <ul className="sm:fixed p-4 border-2 rounded-xl">
          {toc.map((item, idx) => (
            <li key={idx}>
              <Link
                href={`${pathname}/${item.href}`}
                shallow
                className={`py-2 ${setIndent(item.parent)}`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
