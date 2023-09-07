import PostItemAsideSkeleton from "./post-item-aside-skeleton";
import PostItemArticleSkeleton from "./post-item-article-skeleton";
import Skeleton from "./skeleton";

export default function PostItemSkeleton() {
  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <Skeleton className="h-12 text-center mt-16 w-full mx-auto"></Skeleton>
        <PostItemArticleSkeleton />
      </section>
      <PostItemAsideSkeleton />
    </>
  );
}
