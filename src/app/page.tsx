import { getPosts } from "./api/posts";

export default async function Home() {
  const list = await getPosts();
  return (
    <>
      <ul className="w-full px-4 gap-4 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {list.map(({ title, description }, i) => (
          <li
            key={i}
            className="shadow border-2 dark:border-gray-600 rounded h-56 relative flex flex-col"
          >
            <div className="bg-gray-500 h-32 flex justify-center items-center">
              {title}
            </div>
            <h3 className="text-lg pt-2 px-3 truncate">{title}</h3>
            <p className="text-base py-4 px-3 line-clamp-2 leading-8 flex-auto">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
