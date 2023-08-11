import { getPosts } from "./api/posts";
import { convertFormat } from "./utils/date";

export default async function Home() {
  const list = await getPosts();
  return (
    <>
      <ul className="w-full px-4 gap-4 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {list.map(({ _id, title, description, createDate }) => (
          <li
            key={_id}
            className="relative flex flex-col border-2 border-gray-200 dark:border-gray-600 rounded h-64"
          >
            <div className="text-xl font-bold bg-gray-500 h-36 flex justify-center items-center text-white">
              <h3 className="mx-4 truncate">{title}</h3>
            </div>
            <div className="font-medium text-md pt-2 px-3 truncate">
              {title}
            </div>
            <p className="font-light text-base mt-2 mx-3 line-clamp-2 leading-4 flex-auto text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <time className="ml-auto font-light text-sm my-2 mr-3 truncate text-gray-500">
              {convertFormat(createDate)}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
}
