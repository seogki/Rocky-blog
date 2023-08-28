import Skeleton from "@/components/skeleton/skeleton";
import { getAllPostsOrderByDate } from "@/data";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Rocky Blog - Home`,
    description: `Rocky Blog - Home`
  };
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:my-8">Home</h1>
      <div className="space-y-4 max-w-screen-md mx-auto">
        {/* <MainContainerSkeleton /> */}
        <Suspense fallback={<MainContainerSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <MainContainer />
        </Suspense>
      </div>
    </>
  );
}

const MainContainerSkeleton = () => {
  return (
    <>
      <Skeleton className="p-4 md:p-5 mx-2 h-[300px] md:h-[200px]" />
      <Skeleton className="p-4 md:p-5 mx-2 h-[300px] md:h-[200px]" />
    </>
  );
};

const MainContainer = async () => {
  const posts = await getAllPostsOrderByDate(5);

  const tags = Array.from(
    new Set(posts.map((post) => post.tags.split(",")).flat())
  );

  return (
    <>
      <MainSection title={"Recent Posts"}>
        <>
          {posts.map((post) => (
            <div
              className="py-1 flex flex-row flex-wrap w-full"
              key={post.slug}
            >
              <time className="grow-0">[{post.date}]</time>
              <em className="truncate hover:text-teal-600 hover:dark:text-teal-400 mx-2 flex-1">
                <Link href={`/posts/${post.category}/${post!.slug}`}>
                  {post.title}
                </Link>
              </em>
            </div>
          ))}
        </>
      </MainSection>
      <MainSection title={"Recent Tags"}>
        <>
          {tags.map((tag) => (
            <div
              key={tag}
              className="mx-1 my-1 first-of-type:ml-0 last-of-type:mr-0 py-1 px-3 rounded-2xl bg-violet-500 text-white"
            >
              {tag}
            </div>
          ))}
        </>
      </MainSection>
    </>
  );
};

type MainSectionProps = {
  children: React.JSX.Element;
  title: string;
};

const MainSection = ({ children, title }: MainSectionProps) => {
  return (
    <section className="p-4 md:p-5 mx-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex justify-start flex-wrap text-sm p-2 md:mt-4">
        {children}
      </div>
    </section>
  );
};
