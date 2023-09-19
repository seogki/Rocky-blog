import PostItemArticle from "@/components/post/post-item-article";
import { getPost, getPostWithPrevAndNext } from "@/data";
import { Post, PostHolder } from "@/interface/posts.interface";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import PostItemAside from "./post-item-aside";

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

export default async function PostItemContainer({ params }: Props) {
  const { category, slug } = params;

  let holder: PostHolder | undefined;

  try {
    holder = await getPostWithPrevAndNext(slug, category);
  } catch (e: any) {
    console.error(e);
  }

  if (!holder || !holder.current) redirect("/");

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1 relative md:border-l-2 md:border-zinc-200 dark:md:border-zinc-800">
        <PostItemArticle category={category} holder={holder} />
        <TopScrollButton />
      </section>
      <PostItemAside toc={holder.current.toc} />
    </>
  );
}
