import PostItemContainer from "@/components/post/post-item-container";
import { getAllPostsOrderByDate, getPost } from "@/data";
import { Post } from "@/interface/posts.interface";
import { Metadata } from "next";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { category, slug } = params;

  let post: Post | undefined;
  try {
    post = await getPost(slug, category);
  } catch (e: any) {
    console.error(e);
    return {
      title: `${slug.replaceAll("-", " ")}`,
      description: "This is my Rocky Blog Single Post Page"
    };
  }

  if (!post) {
    return {
      title: `${slug.replaceAll("-", " ")}`,
      description: "This is my Rocky Blog Single Post Page"
    };
  }

  return {
    title: `[${category}] ${post.title}`,
    description: post.description,
    openGraph: {
      title: `[${category}] ${post.title}`,
      description: post.description,
      siteName: "Rocky Blog",
      type: "article",
      url: `https://www.rockyblog.dev/posts/${category}/${post.slug}`,
      images: ["/og.jpg"]
    }
  };
};

export async function generateStaticParams() {
  const posts = await getAllPostsOrderByDate(0);

  return posts.map((post) => ({
    slug: post.slug,
    category: post.category
  }));
}

export default function PostItemPage({ params }: Props) {
  return (
    <>
      <PostItemContainer params={params} />
    </>
  );
}
