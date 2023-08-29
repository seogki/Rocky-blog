import { getCategories } from "@/data";
import NavigationList from "@/components/navigation-list";
import { Suspense } from "react";
import NavigationListSkeleton from "@/components/skeleton/navigation-list-skeleton";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
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
        {children}
      </div>
    </>
  );
}
