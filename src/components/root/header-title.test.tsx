import { fireEvent, render, screen } from "@testing-library/react";
import HeaderTitle from "./header-title";
import { renderWithProviders } from "@/test/test-utils";
import { closeAll } from "@/redux/features/headerSlice";
import * as redux from "react-redux";

jest.mock("@/redux/features/headerSlice", () => {
  const originalModule = jest.requireActual<
    typeof import("@/redux/features/headerSlice")
  >("@/redux/features/headerSlice");

  return {
    ...originalModule,
    closeAll: jest.fn()
  };
});

describe("header title test", () => {
  test("should header title exists", async () => {
    renderWithProviders(<HeaderTitle />);

    const link: HTMLAnchorElement = screen.getByRole("link");

    expect(link.textContent).toEqual("Rocky Blog");
  });
});
