"use client";

import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import {
  closeDrawer,
  closeMore,
  openDrawer
} from "@/redux/features/headerSlice";
import { Category } from "@/interface/posts.interface";
import dynamic from "next/dynamic";
import { Transition } from "@headlessui/react";

const NavigationList = dynamic(() => import("@/components/navigation-list"), {
  ssr: false
});

export default function HeaderNav({ categories }: { categories: Category[] }) {
  const { isMore, isDrawerOpen } = useAppSelector(({ header }) => header);
  const dispatch = useAppDispatch();
  useToggleScrollbar(isDrawerOpen);

  return (
    <>
      <MdMenu
        className="text-2xl mr-2 text-primary-hover"
        onClick={() => {
          if (isMore) dispatch(closeMore());
          setTimeout(() => dispatch(openDrawer()), 50);
        }}
      />

      {/* <LayoutGroup>
        <BackDropRoot isMount={isDrawerOpen}>
          <motion.div
            {...FadeMotion}
            className="fixed left-0 top-0 w-full h-full bg-zinc-800/50 overflow-hidden"
            onClick={() => dispatch(closeDrawer())}
          ></motion.div>
        </BackDropRoot>

        <ModalRoot isMount={isDrawerOpen}>
          <NavigationList
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0" }}
            exit={{ translateX: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 left-0 h-full w-2/3 dark:bg-zinc-800 bg-white overflow-auto"
            list={categories}
            stopPropagation={(e) => e.stopPropagation()}
          />
        </ModalRoot>
      </LayoutGroup> */}
      <Transition
        show={isDrawerOpen}
        className="w-full h-full fixed top-0 left-0 overflow-hidden"
      >
        <Transition.Child
          className="w-full h-full fixed top-0 left-0 z-30 overflow-hidden"
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full h-full bg-zinc-800/50 overflow-hidden"></div>
        </Transition.Child>
        <Transition.Child
          className="w-full h-full fixed top-0 left-0 z-40 overflow-hidden"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          onClick={() => dispatch(closeDrawer())}
        >
          <NavigationList
            className="h-screen w-2/3 dark:bg-zinc-800 bg-white overflow-auto"
            list={categories}
            stopPropagation={(e) => e.stopPropagation()}
          />
        </Transition.Child>
      </Transition>
    </>
  );
}
