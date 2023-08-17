import { getCategories, getPosts } from "../api/posts";
import PostList from "../components/post/post-list";
import Navigation from "../components/navigation-list";
import PostContainer from "../components/post/post-container";

export default async function Posts() {
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
