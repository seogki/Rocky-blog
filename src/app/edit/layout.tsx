import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rocky Blog - Edit",
  description: "Rocky Blog edit"
};
export default function Layout({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}
