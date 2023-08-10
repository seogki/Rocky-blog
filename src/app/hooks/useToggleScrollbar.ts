import { useEffect, useState } from "react";

export default function useToggleScrollbar(toggle: boolean) {
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggle]);
}
