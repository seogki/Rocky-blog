import { getCategories } from "@/data";
import { notFound, redirect } from "next/navigation";
import NavigationList from "@/components/navigation-list";
import { Suspense } from "react";
import NavigationListSkeleton from "@/components/skeleton/navigation-list-skeleton";

type Props = {
  params: {
    category?: string;
  };
  children: React.ReactNode;
};

export default async function layout({ children, params }: Props) {
  const { category } = params;
  const categories = await getCategories();
  if (!category || !categories.includes(category)) redirect("/");

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
