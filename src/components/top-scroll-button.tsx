"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function TopScrollButton() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollPosition = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollPosition > 30) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, [scrollPosition, setShowScroll]);

  return (
    <Transition
      className="sticky bottom-8 float-right text-lg"
      show={showScroll}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button
        className="p-4 rounded-full bg-zinc-500/50"
        onClick={() => scrollToTop()}
      >
        <MdArrowUpward />
      </button>
    </Transition>
  );
}
