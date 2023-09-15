"use client";

import { motion } from "framer-motion";
import { FadeTweenMotion } from "@/data/motion";

export default function AboutMySelf() {
  return (
    <>
      <main className="mt-16 grid grid-cols-2 gap-4">
        <motion.h2
          {...FadeTweenMotion}
          className="text-center place-self-center text-2xl font-semibold"
        >
          Who am I
        </motion.h2>
        <motion.div className="text-default tracking-wide" {...FadeTweenMotion}>
          <ul className="list-disc">
            <motion.li className="indent-2 pb-4">
              I am South Korean Front-End Engineer, who like to improve skills
              progressively. It&apos;s been{" "}
              <span className="text-primary text-lg">six</span> years since i
              started to be a developer and I love to learn different languages
            </motion.li>
            <motion.li className="indent-2 py-4">
              I have started as Android developer, but after learning web
              frontend, i decided to focus on web development skills.
            </motion.li>
            <motion.li className="indent-2 py-4">
              Mainly developing Vue.js with Electron, and still learning about
              React and Next.js.
            </motion.li>
          </ul>
        </motion.div>
      </main>
    </>
  );
}
