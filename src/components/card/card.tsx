import { motion } from "framer-motion";
import React, { ForwardedRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card(
  { className = "", children }: Props,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={`${className} rounded-lg dark:bg-zinc-800 bg-white`}
    >
      {children}
    </div>
  );
}

export default motion(React.forwardRef<HTMLDivElement, Props>(Card));
