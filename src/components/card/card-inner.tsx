"use client";

import { motion } from "framer-motion";
import React, { ForwardedRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function CardInner(
  { className = "", children }: Props,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <section
      ref={ref}
      className={`${className} bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-400 dark:border-zinc-600 rounded-lg p-4`}
    >
      {children}
    </section>
  );
}

export default motion(React.forwardRef<HTMLDivElement, Props>(CardInner));
