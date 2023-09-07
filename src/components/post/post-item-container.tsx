import PostItem from "@/components/post/post-item";
import PostItemAside from "@/components/post/post-item-aside";
import TopScrollButton from "@/components/top-scroll-button";
import { getPost } from "@/data";
import { Post } from "@/interface/posts.interface";
import { redirect } from "next/navigation";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function PostItemContainer({ params }: Props) {
  const { category, slug } = params;

  let post: Post | undefined;

  try {
    post = await getPost(slug, category);
  } catch (e: any) {
    console.error(e);
  }

  if (!post) redirect("/");

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1 relative md:border-l-2 md:border-zinc-500">
        <PostItem category={category} post={post} />
        <TopScrollButton />
      </section>
      <PostItemAside toc={post.toc} />
    </>
  );
}
