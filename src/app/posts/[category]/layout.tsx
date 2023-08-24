import { getCategories } from "@/app/data";
import { notFound } from "next/navigation";
import NavigationList from "@/app/components/navigation-list";
import { Suspense } from "react";
import NavigationListSkeleton from "@/app/components/skeleton/navigation-list-skeleton";

type Props = {
  params: {
    category?: string;
  };
  children: React.ReactNode;
};

export default async function layout({ children, params }: Props) {
  const { category } = params;
  const categories = await getCategories();
  if (!category) return notFound();
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
