import { getCategories } from "@/data";
// import NavigationList from "@/components/navigation-list";
import { Suspense } from "react";
import NavigationListSkeleton from "@/components/skeleton/navigation-list-skeleton";
import dynamic from "next/dynamic";

type Props = {
  children: React.ReactNode;
};

const NavigationList = dynamic(() => import("@/components/navigation-list"), {
  loading: () => <NavigationListSkeleton />
});

export default async function layout({ children }: Props) {
  const categories = await getCategories();

  return (
    <>
      <div
        className={`w-full h-full flex flex-col sm:flex-row mx-auto justify-start content-start`}
      >
        <NavigationList
          list={categories}
          className="hidden sm:block sm:basis-2/12"
        />
        {children}
      </div>
    </>
  );
}
