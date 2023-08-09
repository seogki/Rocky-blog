import Link from "next/link";

export default function MenuTabs() {
  return (
    <nav className="lg:ml-auto">
      <ul className="flex flex-wrap flex-col lg:flex-row">
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0">
          {" "}
          <Link href={"/posts"}>Posts</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0">
          {" "}
          <Link href={"/edit"}>Edit</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0">
          {" "}
          <Link href={"/setting"}>Setting</Link>
        </li>
        <li className="text-xl font-medium px-4 mr-2 py-4 lg:py-0">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
