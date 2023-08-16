"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { useMount } from "../hooks/useMount";
export default function ThemeModifier() {
  const { theme, setTheme } = useTheme();
  const { isMount } = useMount();

  if (!isMount)
    return (
      <MdDarkMode className="cursor-pointer mr-3 text-black/50 dark:text-white/50" />
    );

  return (
    <>
      <MdDarkMode
        className="cursor-pointer mr-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
}
