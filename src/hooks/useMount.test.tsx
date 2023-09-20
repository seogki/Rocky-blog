import { renderHook } from "@testing-library/react";
import { useMount } from "./useMount";

test("should isMount to be true", () => {
  const { result } = renderHook(() => useMount());
  expect(result.current).toBeTruthy();
});
