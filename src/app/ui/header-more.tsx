"use client";

import { Transition } from "@headlessui/react";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import MenuTabs from "../components/menu-tabs";

export default function HeaderMore() {
  const [isMore, setIsMore] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isMore) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMore]);

  //   useEffect(() => {
  //     const handleRouteChange = (url: string, { shallow }: { shallow: any }) => {
  //       console.log(
  //         `App is changing to ${url} ${
  //           shallow ? "with" : "without"
  //         } shallow routing`
  //       );
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);

  //     return () => {
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }, [router]);

  return (
    <>
      <MdMoreVert
        className="text-2xl"
        onClick={() => setIsMore((isMore) => !isMore)}
      />
      <Transition
        show={isMore}
        className="w-full h-[calc(100%-4rem)] fixed bottom-0 left-0 z-40 overflow-hidden"
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div className="bg-white dark:bg-zinc-800 w-full h-full">
          <MenuTabs />
        </div>
      </Transition>
    </>
  );
}
