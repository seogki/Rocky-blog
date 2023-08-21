export default function PostListSkeleton() {
  const posts = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {posts.map((post) => (
        <div
          key={post}
          className="w-full h-auto p-4 my-4 flex flex-col justify-between align-middle"
        >
          <div className="animate-pulse h-4 mb-2 w-full rounded-lg bg-zinc-700 text-lg font-medium dark:text-zinc-100 text-zinc:800 line-clamp-2">
            <h2></h2>
          </div>
          <div className="animate-pulse text-base h-4 w-2/3 rounded-lg bg-zinc-700 font-normal mt-0 sm:mt-2 dark:text-zinc-200 text-zinc-700 line-clamp-2">
            <p></p>
          </div>
          <div className="animate-pulse ml-auto text-sm font-light h-4 w-1/3 rounded-lg bg-zinc-700 mt-2 dark:text-zinc-300 text-zinc-600">
            <time></time>
          </div>
        </div>
      ))}
    </>
  );
}
