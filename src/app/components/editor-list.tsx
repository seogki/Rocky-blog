import Link from "next/link";
import { useRouter } from "next/router";
import { getPosts } from "../api/posts";
import { Category, Post } from "../interface/posts.interface";
import { convertFormat } from "../utils/date";

type Props = {
  posts: Post[];
  categories: Category[];
};

export default async function EditorList({ categories }: Props) {
  const posts = await getPosts();
  const getCategoryNameById = (id: string) =>
    categories.find((item) => item._id === id)?.name || "ETC";
  return (
    <>
      {posts.map(({ _id, title, categoryId, createDate }) => (
        <li
          key={_id}
          className="mx-4 p-3 border-2 mb-2 rounded-md border-gray-200 dark:border-gray-800"
        >
          <Link
            href={`/posts/${getCategoryNameById(categoryId)}?_id=${_id}`}
            className="flex flex-col justify-between"
          >
            <span className="text-sm font-light text-amber-600 dark:text-amber-400">
              <b>{getCategoryNameById(categoryId)}</b>
            </span>
            <h3 className="truncate text-base lg:text-xl font-medium mx-4 mt-3 text-center">
              {title}
            </h3>
            {/* <p className="font-light text-base mt-2 mx-3 line-clamp-2 leading-4 flex-auto text-gray-600 dark:text-gray-400">
            {convertStrToOutputData(description)}
        </p> */}
            <time className="w-full text-right font-light text-sm mt-4 mr-3 truncate text-gray-500">
              {convertFormat(createDate)}
            </time>
          </Link>
        </li>
      ))}
    </>
  );
}
