import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

export default function MenuTab({
  className = "",
  onClick,
  link,
  children
}: {
  children: string;
  className?: string;
  link: string;
  onClick: () => void;
}) {
  // const pathname = usePathname();

  // useEffect(() => {
  //   const prefix = pathname.split("/")[1];
  //   console.debug(prefix);
  //   console.debug(pathname);
  // }, [pathname]);

  return (
    <>
      <li
        className={`${className} w-full lg:w-auto my-4 lg:my-0 hover:text-teal-600 dark:hover:text-teal-400`}
      >
        <Link
          href={link}
          onClick={() => onClick()}
          className="px-4 mr-0 lg:mr-2 py-4 lg:py-0"
        >
          {children}
        </Link>
      </li>
    </>
  );
}
