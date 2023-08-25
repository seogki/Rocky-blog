import { Suspense } from "react";
import Loading from "./loading";

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
