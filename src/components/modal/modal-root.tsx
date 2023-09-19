"use client";

import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const MODAL_ROOT_ID = "modal-root";

type Props = {
  children: React.ReactNode;
  isMount: boolean;
};

export default function ModalRoot({ children, isMount }: Props) {
  // if (!isMount) return;

  const modalRoot = document.getElementById(MODAL_ROOT_ID);

  if (modalRoot === null) return <></>;

  return createPortal(
    <AnimatePresence>{isMount && children}</AnimatePresence>,
    modalRoot
  );
}
