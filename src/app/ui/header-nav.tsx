"use client";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";
export default function HeaderNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const itemList = ["JAVASCRIPT", "NEXT.JS", "REACT", "VUE", "CSS", "ETC"];

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  return (
    <>
      <MdMenu
        className="text-2xl mr-2"
        onClick={() => setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)}
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
          onClick={() => setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)}
        >
          <nav
            className="h-screen w-2/3 bg-white dark:bg-slate-900 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {itemList.map((item) => (
                <li key={item} className="text-base py-4 px-4">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </Transition.Child>
      </Transition>
    </>
  );
}
