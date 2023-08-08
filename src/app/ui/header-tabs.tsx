import Link from "next/link";

export default function HeaderTabs() {
  return (
    <>
      <div className="text-2xl pr-6 pr-10 ml-auto">
        {" "}
        <Link href={"/setting"}>Setting</Link>
      </div>
      <div className="text-2xl pl-6 pr-10">
        <Link href={"/about"}>About</Link>
      </div>
    </>
  );
}
