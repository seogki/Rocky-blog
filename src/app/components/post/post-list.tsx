import { getPostsByCategoryName } from "@/app/data";
import Link from "next/link";

type Props = {
  category: string;
};

export default async function PostList({ category }: Props) {
  const posts = await getPostsByCategoryName(category);

  return (
    <>
      <div className="flex flex-col w-full h-full px-4">
        {posts.map((post) => (
          <Link
            key={post!.slug}
            href={`/posts/${category}/` + post!.slug}
            passHref
          >
            <div className="w-full h-auto p-4 my-4 flex flex-col justify-between align-middle">
              <div className="text-lg font-medium dark:text-zinc-100 text-zinc:800 line-clamp-2">
                <h2>{post!.title}</h2>
              </div>
              <div className="text-base font-normal mt-0 sm:mt-2 dark:text-zinc-200 text-zinc-700 line-clamp-2">
                <p>{post!.description}</p>
              </div>
              <div className="ml-auto text-sm font-light mt-2 dark:text-zinc-300 text-zinc-600">
                <time>{post!.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
