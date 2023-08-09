"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
export default function ThemeModifier() {
  const { theme, setTheme } = useTheme();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount)
    return (
      <MdDarkMode className="text-2xl mr-4 text-black/50 dark:text-white/50" />
    );

  return (
    <>
      <MdDarkMode
        className="text-2xl mr-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
}
