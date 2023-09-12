"use client";

import { Transition } from "@headlessui/react";
import { MdMoreVert } from "@react-icons/all-files/md/MdMoreVert";
import MenuTabs from "@/components/menu/menu-tab-list";
import useToggleScrollbar from "@/hooks/useToggleScrollbar";
import { closeDrawer, closeMore, openMore } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function HeaderMore() {
  const { isMore, isDrawerOpen } = useAppSelector(({ header }) => header);
  const dispatch = useAppDispatch();
  useToggleScrollbar(isMore);

  const close = () => {
    if (isDrawerOpen) dispatch(closeDrawer());
    setTimeout(() => {
      if (isMore) {
        dispatch(closeMore());
      } else {
        dispatch(openMore());
      }
    }, 50);
  };

  return (
    <>
      <MdMoreVert className="text-primary-hover" onClick={() => close()} />
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
        <div className="dark:bg-zinc-800 bg-white w-full h-full">
          <MenuTabs />
        </div>
      </Transition>
    </>
  );
}
