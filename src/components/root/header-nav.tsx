"use client";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import {
  closeDrawer,
  closeMore,
  openDrawer
} from "@/redux/features/headerSlice";
import NavigationList from "@/components/navigation-list";
export default function HeaderNav({ categories }: { categories: string[] }) {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();
  useToggleScrollbar(isDrawerOpen);

  return (
    <>
      <MdMenu
        className="text-2xl mr-2"
        onClick={() => {
          if (isMore) dispatch(closeMore());
          setTimeout(() => dispatch(openDrawer()), 50);
        }}
      />

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
          <div className="w-full h-full bg-slate-700/50 overflow-hidden"></div>
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
            onClick={(e) => e.stopPropagation()}
          />
        </Transition.Child>
      </Transition>
    </>
  );
}