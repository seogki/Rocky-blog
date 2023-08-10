"use client";

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import MenuTabs from "../components/menu-tabs";
import useToggleScrollbar from "../hooks/useToggleScrollbar";
import {
  closeDrawer,
  closeMore,
  openMore
} from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function HeaderMore() {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();
  useToggleScrollbar(isMore);

  return (
    <>
      <MdMoreVert
        className="text-2xl"
        onClick={() => {
          if (isDrawerOpen) dispatch(closeDrawer());
          setTimeout(() => {
            if (isMore) dispatch(closeMore());
            else dispatch(openMore());
          }, 100);
        }}
      />
      <Transition
        show={isMore}
        className="w-full h-[calc(100%-4rem)] fixed bottom-0 left-0 z-40 overflow-hidden"
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div className="bg-white dark:bg-zinc-800 w-full h-full">
          <MenuTabs />
        </div>
      </Transition>
    </>
  );
}
