"use client";

import { useTheme } from "next-themes";
import { useMount } from "@/hooks/useMount";
import { FaSpinner } from "react-icons/fa6";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeModifier() {
  const { theme, setTheme, systemTheme } = useTheme();
  const { isMount } = useMount();

  if (!isMount)
    return (
      <FaSpinner className="animate-spin ml-auto lg:ml-2 cursor-pointer mr-3 text-black/50 dark:text-white/50" />
    );

  const currentTheme = theme === "system" ? systemTheme : theme || "dark";

  return (
    <>
      {currentTheme === "dark" ? (
        <BsFillMoonFill
          className="hover:text-teal-600 dark:hover:text-teal-400 ml-auto lg:ml-2 cursor-pointer mr-3"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillSunFill
          className="hover:text-teal-600 dark:hover:text-teal-400 ml-auto lg:ml-2 cursor-pointer mr-3"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
