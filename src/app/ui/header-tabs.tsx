import Link from "next/link";

export default function HeaderTabs() {
  return (
    <nav className="ml-auto">
      <ul className="flex flex-wrap">
        <li className="text-xl font-medium px-4 mr-2">
          {" "}
          <Link href={"/posts"}>Posts</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2">
          {" "}
          <Link href={"/edit"}>Edit</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2">
          {" "}
          <Link href={"/setting"}>Setting</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
