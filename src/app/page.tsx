import { getCategories, getPosts } from "./api/posts";
import EditorList from "./components/editor/editor-list";
import Navigation from "./components/navigation";
import PostContainer from "./components/post-container";

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={"RECENT"}>
        {/* @ts-expect-error Async Server Component */}
        <EditorList></EditorList>
      </PostContainer>
    </>
  );
}
