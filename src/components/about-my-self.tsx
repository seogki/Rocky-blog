"use client";

import Image from "next/image";
import Card from "./card/card";
import CardInner from "./card/card-inner";
import { motion } from "framer-motion";
import { EnterMotion, FadeTweenMotion } from "@/data/motion";

export default function AboutMySelf() {
  return (
    <>
      <main className="mt-16 grid grid-cols-2 gap-4">
        {/* <CardInner> */}
        <motion.h2
          {...FadeTweenMotion}
          className="text-center place-self-center text-2xl font-semibold"
        >
          Who am I
        </motion.h2>
        {/* <Image
          src={"/me.jpg"}
          //   width={120}
          //   height={50}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "150px" }}
          alt="Seogki Hong"
          className="float-left rounded-lg mr-6"
        /> */}
        {/* </CardInner> */}
        {/* <CardInner> */}

        <motion.div className="text-default tracking-wide" {...FadeTweenMotion}>
          <ul className="list-disc">
            <motion.li className="indent-2 pb-4">
              I am South Korean Front-End Engineer, who like to improve skills
              progressively. It's been{" "}
              <span className="text-primary text-lg">six</span> years since i
              started to be a developer and I love to learn different languages
            </motion.li>
            <motion.li className="indent-2 py-4">
              I have started as Android developer, but after learning web
              frontend, i decided to focus of web development skills.
            </motion.li>
            <motion.li className="indent-2 py-4">
              Mainly developing Vue.js with Electron, and still learning about
              React and Next.js.
            </motion.li>
          </ul>
        </motion.div>

        {/* </CardInner> */}
      </main>
    </>
  );
}
