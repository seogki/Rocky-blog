import PostContainer from "@/app/components/post-container";
import EditorWrapper from "./editor-wrapper";

type Props = {
  params: {
    name: string;
  };
  searchParams: {
    _id: string;
  };
};

export default async function PostCategory({ params, searchParams }: Props) {
  const { name } = params;
  const { _id } = searchParams;
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PostContainer title={name}>
        Category {name} {_id}
        {name && !_id && <div></div>}
        {name && _id && <EditorWrapper />}
      </PostContainer>
    </>
  );
}
