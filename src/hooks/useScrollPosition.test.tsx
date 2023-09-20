import { renderHook } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import useScrollPosition from "./useScrollPosition";
import React from "react";

test("should enable scroll event", () => {
  const mockState = jest.fn();
  jest.spyOn(React, "useState").mockImplementation(() => [0, mockState]);

  const { rerender } = renderHook(() => useScrollPosition());

  fireEvent.scroll(window);
  rerender();
  expect(mockState).toHaveBeenCalled();
});

afterEach(() => jest.clearAllMocks());
