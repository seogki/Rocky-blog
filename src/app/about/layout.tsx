import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rocky Blog - About",
  description: "Rocky Blog about"
};

export default function Layout({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}
