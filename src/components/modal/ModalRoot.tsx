"use client";

import { createPortal } from "react-dom";

const MODAL_ROOT_ID = "modal-root";

type Props = {
  children: React.ReactNode;
  mounted: boolean;
};

export default function ModalRoot({ children, mounted }: Props) {
  if (!mounted) return;

  const modalRoot = document.getElementById(MODAL_ROOT_ID);

  return createPortal(children, modalRoot!!);
}
