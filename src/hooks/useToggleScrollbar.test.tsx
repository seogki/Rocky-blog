import { renderHook } from "@testing-library/react";
import useToggleScrollbar from "./useToggleScrollbar";

test("should disable scrollbar", () => {
  const { result } = renderHook(() => useToggleScrollbar(true));

  expect(document.body.classList.contains("overflow-hidden")).toBeTruthy();
});

test("should enable scrollbar", () => {
  const { result } = renderHook(() => useToggleScrollbar(false));

  expect(document.body.classList.contains("overflow-hidden")).toBeFalsy();
});

test("should enable scrollbar on unmount", () => {
  const { result, unmount } = renderHook(() => useToggleScrollbar(true));

  expect(document.body.classList.contains("overflow-hidden")).toBeTruthy();
  unmount();
  expect(document.body.classList.contains("overflow-hidden")).toBeFalsy();
});
