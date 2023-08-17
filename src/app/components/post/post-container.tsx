import { getCategories } from "@/app/data";
import Navigation from "../navigation-list";

type Props = {
  children?: React.JSX.Element | string;
  title?: string;
};

export default async function PostContainer({ children, title }: Props) {
  const categories = await getCategories();
  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row mx-auto justify-start content-start">
        <Navigation
          list={categories}
          className="hidden sm:block sm:basis-2/12"
        />
        <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
          {title && (
            <h1 className="text-xl sm:text-lg font-bold text-center mb-2">
              {title}
            </h1>
          )}
          {children}
        </section>
      </div>
    </>
  );
}
