import { getPostsByCategoryName } from "@/app/data";
import Link from "next/link";
import { useRouter } from "next/router";
// import { getCategories, getPosts } from "../../api/posts";
import { Category, Post } from "../../interface/posts.interface";
import { convertFormat } from "../../utils/date";

type Props = {
  category: string;
};

export default async function PostList({ category }: Props) {
  const posts = await getPostsByCategoryName(category);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        {posts.map((post) => (
          <Link
            key={post!.slug}
            href={`/posts/${category}/` + post!.slug}
            passHref
          >
            <div className="w-full h-auto p-4 my-4 flex flex-col justify-between align-middle border-2 rounded-lg">
              <div className="text-xl font-medium dark:text-zinc-100 text-zinc:800">
                <h2>{post!.title}</h2>
              </div>
              <div className="text-lg font-normal dark:text-zinc-200 text-zinc-700">
                <p>{post!.description}</p>
              </div>
              <div className="ml-auto text-base font-light dark:text-zinc-300 text-zinc-600">
                <time>{post!.date}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
