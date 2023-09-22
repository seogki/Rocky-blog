"use client";

import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ROOT_ID = "modal-root";

type Props = {
  children: React.ReactNode;
  isMount: boolean;
};

export default function ModalRoot({ children, isMount }: Props) {
  if (typeof window === "undefined") return <></>;

  const modalRoot = document.getElementById(ROOT_ID);

  if (modalRoot === null) return <></>;

  return createPortal(
    <AnimatePresence>{isMount && children}</AnimatePresence>,
    modalRoot
  );
}
