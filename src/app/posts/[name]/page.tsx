import { getCategories, getPost, getPostsByCategoryId } from "@/app/api/posts";
import PostList from "@/app/components/post/post-list";
import PostContainer from "@/app/components/post/post-container";
import { OutputData } from "@editorjs/editorjs";

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
          <PostList posts={posts} categories={categories} />
        </PostContainer>
      </>
    );
  }

  const data = await getPost(_id);
  const { title, description, temporary, html } = data;
  const editorData = JSON.parse(description) as OutputData;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={title}>
        {/* <EditorTemporaryRenderer data={editorData} /> */}
      </PostContainer>
    </>
  );

  // if (temporary) {
  //   return (
  //     <>
  //       {/* @ts-expect-error Async Server Component */}
  //       <PostContainer title={title}>
  //         <EditorTemporaryRenderer data={editorData} />
  //       </PostContainer>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       {/* @ts-expect-error Async Server Component */}
  //       <PostContainer title={title}>
  //         <EditorMainRenderer data={editorData} />
  //       </PostContainer>
  //     </>
  //   );
  // }
}
