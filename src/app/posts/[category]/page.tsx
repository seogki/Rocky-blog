import PostList from "@/components/post/post-list";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PostListSkeleton from "@/components/skeleton/post-list-skeleton";
import { getCategories } from "@/data";

type Props = {
  params: {
    category: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { category } = params;
  return {
    title: `Rocky Blog - Posts [${category}]`,
    description: `This is my Rocky Blog ${category} Posts Page`,
    openGraph: {
      title: `Rocky Blog - Posts [${category}]`,
      description: `This is my Rocky Blog ${category} Posts Page`,
      siteName: "Rocky Blog",
      type: "article",
      url: `https://www.rockyblog.dev/posts/${category}`,
      images: ["/og.jpg"]
    }
  };
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.name
  }));
}

export default function PostListPage({ params }: Props) {
  const { category } = params;
  if (!category) return notFound();

  return (
    <>
      <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
        <h1 className="text-2xl font-bold text-center my-2">{category}</h1>
        <Suspense fallback={<PostListSkeleton />}>
          <PostList category={category} />
        </Suspense>
      </section>
    </>
  );
}
