import { getCategories } from "@/app/data";
import { Suspense } from "react";
import NavigationList from "../navigation-list";
import NavigationListSkeleton from "../skeleton/navigation-list-skeleton";

type Props = {
  children?: React.JSX.Element | string;
  title?: string;
  aside?: React.JSX.Element;
};

export default async function PostContainer({ title, children, aside }: Props) {
  const categories = await getCategories();
  return (
    <>
      <div
        className={`w-full h-full flex flex-col sm:flex-row mx-auto justify-start content-start`}
      >
        <Suspense fallback={<NavigationListSkeleton />}>
          <NavigationList
            list={categories}
            className="hidden sm:block sm:basis-2/12"
          />
        </Suspense>
        <section className="w-full sm:w-2/3 max-w-screen-md mx-auto sm:mr-auto sm:ml-4 flex-1">
          {title && (
            <h1 className="text-2xl font-bold text-center my-2">{title}</h1>
          )}
          {children}
        </section>
        {aside}
      </div>
    </>
  );
}
