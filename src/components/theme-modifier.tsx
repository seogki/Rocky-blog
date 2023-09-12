"use client";

import { useTheme } from "next-themes";
import { useMount } from "@/hooks/useMount";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
export default function ThemeModifier() {
  const { theme, setTheme, systemTheme } = useTheme();
  const { isMount } = useMount();

  if (!isMount)
    return (
      <FaSpinner className="animate-spin ml-2 cursor-pointer mr-3 text-black/50 dark:text-white/50" />
    );

  const currentTheme = theme === "system" ? systemTheme : theme || "dark";

  return (
    <>
      {currentTheme === "dark" ? (
        <FaMoon
          className="text-primary-hover ml-2 mr-3"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaSun
          className="text-primary-hover ml-2 mr-3"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
