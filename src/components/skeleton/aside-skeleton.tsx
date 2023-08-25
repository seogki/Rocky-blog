import Skeleton from "./skeleton";

export default function AsideSkeleton() {
  return (
    <>
      <aside className="basis-3/12 hidden lg:block ml-8">
        <div className="fixed py-2 pl-4 pr-6 lg:pr-10 mt-64 mr-4 max-w-[350px] max-h-[400px] 2xl:max-w-[450px] 2xl:max-h-[550px]">
          <Skeleton className="w-48 h-6 my-6"></Skeleton>
          <div>
            <Skeleton className="w-32 h-4 my-4"></Skeleton>
            <Skeleton className="ml-1 w-32 h-4 my-4"></Skeleton>
            <Skeleton className="ml-2 w-32 h-4 my-4"></Skeleton>
            <Skeleton className="w-32 h-4 my-4"></Skeleton>
            <Skeleton className="w-32 h-4 my-4"></Skeleton>
            <Skeleton className="ml-1 w-32 h-4 my-4"></Skeleton>
            <Skeleton className="ml-2 w-32 h-4 my-4"></Skeleton>
          </div>
        </div>
      </aside>
    </>
  );
}
