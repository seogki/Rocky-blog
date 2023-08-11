import { getPosts } from "./api/posts";

export default async function Home() {
  const list = await getPosts();
  return (
    <>
      <div className="w-full px-4 gap-3 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {list.map(({ title, description }, i) => (
          <div
            key={i}
            className="shadow border-2 dark:border-gray-600 rounded h-56"
          >
            <div className="bg-gray-500 h-32 flex justify-center items-center">
              {title}
            </div>
            <div className="text-lg pl-2">{title}</div>
            <div className="text-base pl-2">{description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
