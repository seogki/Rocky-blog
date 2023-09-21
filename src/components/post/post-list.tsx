import {
  getAllPostsOrderByDate,
  getPostsByCategoryName,
  getPostsByTagName
} from "@/data";
import { Post } from "@/interface/posts.interface";
import Link from "next/link";
import PostCreateTime from "./contents/post-create-time";
import PostReadMinute from "./contents/post-read-minute";
import PostTags from "./contents/post-tags";

type Props = {
  category?: string;
  tag?: string;
};

export default async function PostList({ category, tag }: Props) {
  let posts: Post[] = [];

  try {
    posts = tag
      ? await getPostsByTagName(tag)
      : category === "RECENT"
      ? await getAllPostsOrderByDate()
      : await getPostsByCategoryName(category!!);
  } catch (e: any) {
    console.error("error", e);
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
        <h2 className="px-2 text-left mt-4 text-default font-medium">
          Total {posts.length}
        </h2>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={{
                pathname: `/posts/${post.category}/${post.slug}`
              }}
            >
              <div className="w-full h-auto p-2 my-3 sm:py-4 flex flex-col justify-between align-middle group">
                <h2 className="group-hover:text-teal-600 dark:group-hover:text-teal-400 text-xl font-bold dark:text-zinc-100 text-zinc:800 line-clamp-2">
                  {post.title}
                </h2>
                <div className="text-base font-normal mt-0 sm:mt-2 dark:text-zinc-400 text-zinc-500 line-clamp-2">
                  <p>{post.description}</p>
                </div>

                <ul className="ml-auto text-sm font-light pt-8 pb-2 flex flex-wrap justify-end">
                  <PostTags tags={post.tags} />
                </ul>

                <div className="ml-auto text-sm font-medium mt-2 text-zinc-500">
                  {(tag || category === "RECENT") && (
                    <strong className="mr-2 text-teal-600 font-bold dark:text-teal-400">
                      {post.category}
                    </strong>
                  )}
                  <PostCreateTime date={post.date} />
                </div>
                <p className="ml-auto text-sm font-medium mt-2 text-zinc-500">
                  <PostReadMinute min={post.minutesRead} />
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
