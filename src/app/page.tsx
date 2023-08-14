import { getCategories, getPosts } from "./api/posts";
import EditorList from "./components/editor-list";

export default async function Home() {
  const posts = await getPosts();
  const categories = await getCategories();
  return (
    <>
      <h1 className="text-2xl font-bold w-full text-center p-2">Contents</h1>
      <ul className="w-full mt-4 max-w-screen-sm px-2 mx-auto">
        <EditorList posts={posts} categories={categories}></EditorList>
      </ul>
    </>
  );
}
