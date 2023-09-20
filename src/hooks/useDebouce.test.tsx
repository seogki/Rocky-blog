import { renderHook } from "@testing-library/react";
import useDebounce from "./useDebounce";
import { act } from "react-dom/test-utils";

test("should change value test to test2 after 1 second", () => {
  const { result, rerender } = renderHook(
    (value: string) => useDebounce(value, 1000),
    {
      initialProps: "test"
    }
  );
  jest.useFakeTimers();

  expect(result.current).toBe("test");

  rerender("test2");
  act(() => {
    //need to wrap with act because update state being called inside timer
    jest.advanceTimersByTime(1000);
  });
  rerender();

  expect(result.current).toBe("test2");
});
