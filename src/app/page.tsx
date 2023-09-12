import { getAllPostsOrderByDate } from "@/data";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import HomeSkeleton from "@/components/skeleton/home-skeleton";
import PostTagLink from "@/components/post/contents/post-tag-link";
import { toUniqueList } from "@/utils/list";
import CardInner from "@/components/card/card-inner";

export const generateMetadata = (): Metadata => {
  return {
    title: `Rocky Blog - Home`,
    description: `This is my Rocky Blog Home Page with recent posts and tags`,
    openGraph: {
      title: `Rocky Blog - Home`,
      description: `This is my Rocky Blog Home Page with recent posts and tags`
    }
  };
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 md:my-8">Home</h1>
      <div className="space-y-4 max-w-screen-md mx-auto">
        <Suspense fallback={<HomeSkeleton />}>
          <MainContainer />
        </Suspense>
      </div>
    </>
  );
}

const MainContainer = async () => {
  const posts = await getAllPostsOrderByDate(5);
  const tags = toUniqueList(posts.map((post) => post.tags).flat());

  return (
    <>
      <MainSection title={"Recent Posts"}>
        <>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.category}/${post!.slug}`}
              className="w-full"
            >
              <div className="text-base py-1.5 flex flex-row flex-wrap w-full">
                <span className="grow-0">[{post.category}]</span>
                <p className="px-2 text-default truncate mx-2 flex-1 hover:text-black hover:dark:text-white">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </>
      </MainSection>
      <MainSection title={"Recent Tags"}>
        <>
          {tags.map((tag, idx) => (
            <PostTagLink key={idx} tag={tag} />
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
    <CardInner>
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex justify-start flex-wrap text-sm p-2 md:mt-2">
        {children}
      </div>
    </CardInner>
  );
};
