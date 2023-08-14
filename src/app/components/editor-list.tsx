import { Category, Post } from "../interface/posts.interface";
import { convertFormat } from "../utils/date";

type Props = {
  posts: Post[];
  categories: Category[];
};

export default function EditorList({ posts, categories }: Props) {
  const getCategoryNameById = (id: string) =>
    categories.find((item) => item._id === id)?.name || "ETC";
  return (
    <>
      {posts.map(({ _id, title, categoryId, createDate }) => (
        <li
          key={_id}
          className="mx-4 flex flex-col justify-between p-3 border-2 rounded-md border-gray-200 dark:border-gray-800"
        >
          <span className="text-sm font-light text-amber-400">
            <b>{getCategoryNameById(categoryId)}</b>
          </span>
          <h3 className="truncate text-xl w-full font-medium py-1 text-center">
            {title}
          </h3>
          {/* <p className="font-light text-base mt-2 mx-3 line-clamp-2 leading-4 flex-auto text-gray-600 dark:text-gray-400">
            {convertStrToOutputData(description)}
          </p> */}
          <time className="w-full text-right font-light text-sm mt-4 mr-3 truncate text-gray-500">
            {convertFormat(createDate)}
          </time>
        </li>
      ))}
    </>
  );
}
