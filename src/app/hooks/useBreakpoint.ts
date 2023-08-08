"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";

/**
 * sm : 640,
 * md : 768
 * lg : 1024
 * xl : 1280
 * 2xl : 1440
 */

import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";

import tailwindConfig from "../../../tailwind.config"; // Your tailwind config

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens || {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px"
};

type BreakpointKey = keyof ScreensConfig;

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const breakpointValue = breakpoints[breakpointKey as BreakpointKey];
  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool
  } as Record<typeof breakpointKey, number> &
    Record<KeyAbove | KeyBelow, boolean>;
}
