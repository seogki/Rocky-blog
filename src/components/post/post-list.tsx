import { getAllPostsOrderByDate, getPostsByCategoryName } from "@/data";
import { Post } from "@/interface/posts.interface";
import { convertFormat } from "@/utils/date";
import Link from "next/link";
import PostTags from "./post-tags";

type Props = {
  category: string;
};

export default async function PostList({ category }: Props) {
  let posts: Post[] = [];

  try {
    posts =
      category === "RECENT"
        ? await getAllPostsOrderByDate()
        : await getPostsByCategoryName(category);
  } catch (e: any) {
    console.error(e);
  }

  if (!posts || posts.length < 1) {
    return (
      <>
        <div className="text-center text-lg py-8">
          It is Empty... I need to fill in something
        </div>
      </>
    );
  }

  return (
    <>
      <ul className="flex flex-col w-full h-full px-2">
        {posts.map((post) => (
          <li key={post!.slug}>
            <Link
              href={`/posts/${
                category === "RECENT" ? post.category : category
              }/${post!.slug}`}
              // prefetch={false}
            >
              <div className="w-full h-auto p-2 my-4 sm:py-4 flex flex-col justify-between align-middle group">
                <h2 className="group-hover:text-teal-600 dark:group-hover:text-teal-400 text-xl font-bold dark:text-zinc-100 text-zinc:800 line-clamp-2">
                  {post!.title}
                </h2>
                <div className="text-base font-normal mt-0 sm:mt-2 dark:text-zinc-400 text-zinc-500 line-clamp-2">
                  <p>{post!.description}</p>
                </div>

                <div className="ml-auto text-sm font-light pt-8 pb-2 flex flex-wrap justify-end">
                  <PostTags tags={post.tags} />
                </div>

                <div className="ml-auto text-sm font-medium mt-2 text-zinc-500">
                  {category === "RECENT" && (
                    <strong className="mr-2 text-teal-600 font-bold dark:text-teal-400">
                      {post!.category}
                    </strong>
                  )}
                  <time>{convertFormat(post!.date)}</time>
                </div>
                <p className="ml-auto text-sm font-medium mt-2 text-zinc-500">
                  <strong>📖 {post.minutesRead}</strong>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
