import Link from "next/link";

type Props = {
  tag: string;
};

export default function PostTagLink({ tag }: Props) {
  return (
    <>
      <Link
        key={tag}
        href={{ pathname: `/posts/search`, query: { tag } }}
        className="mx-1 my-1 first-of-type:ml-0 last-of-type:mr-0"
      >
        <div
          key={tag}
          className="py-1 px-3 rounded-2xl border-2 border-zinc-400 dark:border-zinc-600 dark:text-zinc-300 hover:border-violet-500 hover:dark:border-violet-500 hover:bg-violet-500 hover:text-white text-zinc-800"
        >
          {tag}
        </div>
      </Link>
    </>
  );
}
