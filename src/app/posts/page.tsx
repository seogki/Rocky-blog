import PostList from "../components/post/post-list";
import PostContainer from "../components/post/post-container";
import { getCategories } from "../data";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const categories = await getCategories();

  return {
    title: `Rocky Blog - Posts [${categories[0]}]`,
    description: `Rocky Blog - Posts [${categories[0]}]`
  };
};

export default async function Posts() {
  const categories = await getCategories();
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={categories[0]}>
        {/* @ts-expect-error Async Server Component */}
        <PostList category={categories[0]}></PostList>
      </PostContainer>
    </>
  );
}
