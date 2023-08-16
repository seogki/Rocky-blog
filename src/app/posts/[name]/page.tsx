import { getCategories, getPost, getPostsByCategoryId } from "@/app/api/posts";
import EditorList from "@/app/components/editor/editor-list";
import PostContainer from "@/app/components/post-container";
import { OutputData } from "@editorjs/editorjs";
import EditorWrapper from "./editor-wrapper";

type Props = {
  params: {
    name: string;
  };
  searchParams: {
    _id?: string;
  };
};

export default async function PostCategory({ params, searchParams }: Props) {
  const { name } = params;
  const { _id } = searchParams;

  if (!_id) {
    const categories = await getCategories();
    const categoryId = categories.find((item) => item.name === name)?._id;
    const posts = await getPostsByCategoryId(categoryId);

    return (
      <>
        {/* @ts-expect-error Async Server Component */}
        <PostContainer title={name}>
          {/* @ts-expect-error Async Server Component */}
          <EditorList posts={posts} categories={categories} />
        </PostContainer>
      </>
    );
  }

  const data = await getPost(_id);
  const { title, description } = data;
  const editorData = JSON.parse(description) as OutputData;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={title}>
        <EditorWrapper data={editorData} />
      </PostContainer>
    </>
  );
}
