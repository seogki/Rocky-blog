import { getCategories, getPosts } from "../api/posts";
import Navigation from "../components/navigation";

type Props = {
  children?: React.JSX.Element | string;
  title: string;
};

export default async function PostContainer({
  children,
  title = "Contents"
}: Props) {
  const posts = await getPosts();
  const categories = await getCategories();
  return (
    <>
      <div className="w-full h-full max-w-screen-xl flex flex-col sm:flex-row mx-auto justify-center sm:justify-start content-start">
        <Navigation
          list={categories}
          className="hidden sm:block basis-2/12 sm:ml-4"
        />
        <ul className="max-w-screen-md px-1 w-full basis-full mx-auto sm:mx-0">
          <h1 className="text-2xl font-bold w-full text-center p-2 mb-2">
            {title}
          </h1>
          {children}
        </ul>
      </div>
    </>
  );
}
