import PostItemArticle from "@/components/post/post-item-article";
import { getPost, getPostWithPrevAndNext } from "@/data";
import { Post, PostIndex } from "@/interface/posts.interface";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

const TopScrollButton = dynamic(
  () => import("@/components/top-scroll-button"),
  {
    ssr: false
  }
);

const PostItemAside = dynamic(
  () => import("@/components/post/post-item-aside"),
  {
    ssr: false
  }
);

export default async function PostItemContainer({ params }: Props) {
  const { category, slug } = params;

  let obj: PostIndex | undefined;

  try {
    obj = await getPostWithPrevAndNext(slug, category);
  } catch (e: any) {
    console.error(e);
  }

  if (!obj || !obj.current) redirect("/");

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1 relative md:border-l-2 md:border-zinc-200 dark:md:border-zinc-800">
        <PostItemArticle category={category} obj={obj} />
        <TopScrollButton />
      </section>
      <PostItemAside toc={obj.current.toc} />
    </>
  );
}
