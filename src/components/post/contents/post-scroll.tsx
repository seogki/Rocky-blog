"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function PostScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-violet-500 origin-left"
      style={{ scaleX }}
    ></motion.div>
  );
}
