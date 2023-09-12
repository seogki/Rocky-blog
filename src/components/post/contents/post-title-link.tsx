import { Post } from "@/interface/posts.interface";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostTitleLink({ post }: Props) {
  return (
    <Link
      href={{
        pathname: `/posts/${post?.category}/${post?.slug}`
      }}
    >
      {post?.title}
    </Link>
  );
}
