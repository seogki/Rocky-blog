import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rocky Blog - Setting",
  description: "Rocky Blog setting"
};

export default function Layout({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}
