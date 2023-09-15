// "use client";
import React, { ForwardedRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function CardInner({ className = "", children }: Props) {
  return (
    <section
      className={`${className} bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-lg p-4`}
    >
      {children}
    </section>
  );
}

export default CardInner;

// export default motion(React.forwardRef<HTMLDivElement, Props>(CardInner));
