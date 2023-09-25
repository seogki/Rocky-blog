import PostItemArticle from "@/components/post/post-item-article";
import { getPost, getPostNavContainer } from "@/data";
import { PostNavContainer } from "@/interface/posts.interface";
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

  const container = await getPostNavContainer(slug, category);
  if (!container || !container.current) redirect("/");

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1 relative md:border-l-2 md:border-zinc-200 dark:md:border-zinc-800">
        <PostItemArticle category={category} container={container} />
        <TopScrollButton />
      </section>
      <PostItemAside toc={container.current.toc} />
    </>
  );
}
