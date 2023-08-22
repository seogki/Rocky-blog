export default function PostListSkeleton() {
  const posts = [1, 2, 3, 4, 5];

  return (
    <>
      {posts.map((post) => (
        <div
          key={post}
          className="w-full h-auto p-4 my-4 flex flex-col justify-between align-middle"
        >
          <div className="animate-pulse h-4 mb-2 w-full rounded-lg bg-zinc-200 dark:bg-zinc-700 text-lg font-medium dark:text-zinc-100 text-zinc:800 line-clamp-2">
            <h2></h2>
          </div>
          <div className="animate-pulse text-base h-4 w-2/3 rounded-lg bg-zinc-200 dark:bg-zinc-700 font-normal mt-0 sm:mt-2 dark:text-zinc-200 text-zinc-700 line-clamp-2">
            <p></p>
          </div>
          <p className="ml-auto text-sm font-light pt-8 pb-2">
            <span className="animate-pulse mx-1 h-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 first-of-type:ml-0 last-of-type:mr-0 py-1 px-8"></span>
            <span className="animate-pulse mx-1 h-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 first-of-type:ml-0 last-of-type:mr-0 py-1 px-8"></span>
          </p>
          <div className="animate-pulse ml-auto text-sm font-light h-4 w-1/3 rounded-lg bg-zinc-200 dark:bg-zinc-700 mt-2 dark:text-zinc-300 text-zinc-600">
            <time></time>
          </div>
        </div>
      ))}
    </>
  );
}
