import Skeleton from "./skeleton";

export default function PostBodySkeleton() {
  return (
    <>
      <div className="w-full flex flex-row mt-16 mb-4 justify-center items-center">
        <Skeleton className="h-8 w-2/12 mx-1"></Skeleton>
        <Skeleton className="h-8 w-2/12 mx-1"></Skeleton>
        <Skeleton className="h-8 w-2/12 mx-1"></Skeleton>
      </div>

      <Skeleton className="ml-auto h-4 mb-2 w-2/12 mt-4 mb-2"></Skeleton>
      <Skeleton className="ml-auto h-4 mb-2 w-2/12 mt-4 mb-10"></Skeleton>

      <Skeleton className="h-6 w-2/3 my-2"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>

      <div className="my-16"></div>

      <Skeleton className="h-6 w-2/3 my-2"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>
      <Skeleton className="h-4 w-full my-3"></Skeleton>

      <div className="my-16"></div>

      <Skeleton className="h-6 w-2/3 my-2"></Skeleton>
      <Skeleton className="h-64 w-full my-3"></Skeleton>
    </>
  );
}
