import Skeleton from "./skeleton";

export default function HomeSkeleton() {
  return (
    <>
      <Skeleton className="p-4 md:p-5 mx-2 h-[300px] md:h-[200px]" />
      <Skeleton className="p-4 md:p-5 mx-2 h-[300px] md:h-[200px]" />
    </>
  );
}
