import { renderHook } from "@testing-library/react";
import useToggleScrollbar from "./useToggleScrollbar";

test("should disable scrollbar", () => {
  renderHook(() => useToggleScrollbar(true));

  expect(document.body.classList.contains("overflow-hidden")).toBeTruthy();
});

test("should enable scrollbar", () => {
  renderHook(() => useToggleScrollbar(false));

  expect(document.body.classList.contains("overflow-hidden")).toBeFalsy();
});

test("should enable scrollbar on unmount", () => {
  const { unmount } = renderHook(() => useToggleScrollbar(true));

  expect(document.body.classList.contains("overflow-hidden")).toBeTruthy();
  unmount();
  expect(document.body.classList.contains("overflow-hidden")).toBeFalsy();
});
