import Skeleton from "./skeleton";

export default function NavigationListSkeleton() {
  const list = [1, 2, 3];

  return (
    <>
      <div className="hidden sm:block sm:basis-2/12">
        {list.map((item) => (
          <Skeleton
            key={item}
            className="p-2 m-8 ml-2 sm:m-2 w-32 h-4"
          ></Skeleton>
        ))}
      </div>
    </>
  );
}
