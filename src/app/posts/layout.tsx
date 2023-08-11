import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rocky Blog - Posts",
  description: "Rocky Blog posts"
};

export default function Layout({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}
