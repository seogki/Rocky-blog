import Link from "next/link";
import { useRouter } from "next/router";
import { getCategories, getPosts } from "../../api/posts";
import { Category, Post } from "../../interface/posts.interface";
import { convertFormat } from "../../utils/date";

type Props = {
  posts?: Post[];
  categories?: Category[];
};

export default async function PostList({ categories, posts }: Props) {
  const myPosts = posts || (await getPosts());
  const myCategories = categories || (await getCategories());

  const getCategoryNameById = (id: string) =>
    myCategories.find((item) => item._id === id)?.name || "ALL";

  return (
    <>
      {myPosts.map(({ _id, title, categoryId, createDate }) => (
        <div
          key={_id}
          className="w-full pt-4 pb-2 mb-2 [&:not(:first-of-type)]:border-t-2 border-gray-200 dark:border-gray-700"
        >
          <Link
            href={{
              pathname: `/posts/${getCategoryNameById(categoryId)}}`,
              query: { _id }
            }}
            className="w-full flex flex-col"
          >
            <h2 className="text-base sm:text-lg font-medium line-clamp-2 text-gray-700 dark:text-gray-300">
              {title}
            </h2>
            <div className="wrapper font-light ml-auto text-sm text-right mt-4 sm:mt-6 mr-2">
              <b className="text-sky-600 dark:text-sky-400 mr-2">
                {getCategoryNameById(categoryId)}
              </b>
              <time className="text-gray-500">{convertFormat(createDate)}</time>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
