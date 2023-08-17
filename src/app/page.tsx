import PostList from "./components/post/post-list";
import PostContainer from "./components/post/post-container";
import { getCategories } from "./data";

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={"RECENT"}>
        {/* @ts-expect-error Async Server Component */}
        <PostList></PostList>
      </PostContainer>
    </>
  );
}
