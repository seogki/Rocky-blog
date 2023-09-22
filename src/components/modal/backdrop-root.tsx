"use client";

import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ROOT_ID = "backdrop-root";

type Props = {
  children: React.ReactNode;
  isMount: boolean;
};

export default function BackDropRoot({ children, isMount }: Props) {
  if (typeof window === "undefined") return <></>;

  const backdropRoot = document.getElementById(ROOT_ID);

  if (backdropRoot === null) return <></>;

  return createPortal(
    <AnimatePresence>{isMount && children}</AnimatePresence>,
    backdropRoot
  );
}
