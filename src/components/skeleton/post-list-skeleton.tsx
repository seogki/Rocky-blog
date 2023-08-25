import Skeleton from "./skeleton";

export default function PostListSkeleton() {
  const posts = [1, 2, 3];

  return (
    <>
      {posts.map((post) => (
        <div
          key={post}
          className="p-4 my-6 flex flex-col justify-between align-middle px-2"
        >
          <Skeleton className="h-4 mb-2 w-full"></Skeleton>
          <Skeleton className="h-4 w-2/3 mt-0 sm:mt-2"></Skeleton>
          <div className="ml-auto pt-8 pb-2">
            <Skeleton className="inline-block mx-1 w-3 h-4 first-of-type:ml-0 last-of-type:mr-0 py-1 px-8"></Skeleton>
            <Skeleton className="inline-block mx-1 w-3 h-4 first-of-type:ml-0 last-of-type:mr-0 py-1 px-8"></Skeleton>
            <Skeleton className="inline-block mx-1 w-3 h-4 first-of-type:ml-0 last-of-type:mr-0 py-1 px-8"></Skeleton>
          </div>
          <Skeleton className="ml-auto text-sm h-4 w-1/3 mt-4"></Skeleton>
          <Skeleton className="ml-auto text-sm h-4 w-2/12 mt-4"></Skeleton>
        </div>
      ))}
    </>
  );
}
