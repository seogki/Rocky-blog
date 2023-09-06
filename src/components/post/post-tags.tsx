import Link from "next/link";

export default function PostTags({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag) => (
        <li
          key={tag}
          role="textbox"
          className="list-none mx-1 my-1 first-of-type:ml-0 last-of-type:mr-0 py-1 px-3 rounded-2xl bg-violet-500 text-white"
        >
          {tag}
        </li>
      ))}
    </>
  );
}
