import PostContainer from "@/app/components/post/post-container";
import { getPostsByCategoryName } from "@/app/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

type Props = {
  params: {
    category: string;
  };
};

export default async function Posts({ params }: Props) {
  const { category } = params;
  const posts = await getPostsByCategoryName(category);
  // console.debug(posts);
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={category}>
        <div className="flex flex-col w-full h-full">
          {posts.map((post) => (
            <Link
              key={post!.slug}
              href={`/posts/${category}/` + post!.slug}
              passHref
            >
              <div className="w-full h-auto py-2 flex flex-col justify-between align-middle gap-2">
                <div>{post!.title}</div>
                <div>
                  <p>{post!.description}</p>
                </div>
                <div>
                  <time>{post!.date}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PostContainer>
    </>
  );
}
