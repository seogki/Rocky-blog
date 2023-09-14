"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "@react-icons/all-files/md/MdArrowUpward";
import useScrollPosition from "@/hooks/useScrollPosition";
import { AnimatePresence, motion } from "framer-motion";
import { FadeTweenMotion } from "@/data/motion";

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
    <AnimatePresence>
      {showScroll && (
        <div className="sticky bottom-8 float-right text-lg">
          <motion.button
            {...FadeTweenMotion}
            className="p-4 rounded-full bg-zinc-500/50"
            onClick={() => scrollToTop()}
          >
            <MdArrowUpward />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
