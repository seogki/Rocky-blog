import Link from "next/link";

export default function MenuTab({
  className,
  onClick,
  link,
  children
}: {
  children: string;
  className?: string;
  link: string;
  onClick: () => void;
}) {
  return (
    <>
      <li className={`${className && className} w-full lg:w-auto my-4 lg:my-0`}>
        <Link
          href={link}
          onClick={() => onClick()}
          scroll={false}
          className="px-4 mr-0 lg:mr-2 py-4 lg:py-0 "
        >
          {children}
        </Link>
      </li>
    </>
  );
}
