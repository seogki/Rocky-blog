"use client";
import Link from "next/link";
import { closeDrawer, closeMore } from "../redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import MenuTab from "./menu-tab";

export default function MenuTabs() {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();

  const closeAllOpener = () => {
    if (isMore) dispatch(closeMore());
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav className="lg:ml-auto text-xl font-medium">
      <ul className="flex flex-wrap flex-col lg:flex-row ">
        <MenuTab onClick={closeAllOpener} link={"/posts"}>
          Posts
        </MenuTab>
        <MenuTab onClick={closeAllOpener} link={"/edit"}>
          Edit
        </MenuTab>
        <MenuTab onClick={closeAllOpener} link={"/about"}>
          About
        </MenuTab>
        <MenuTab onClick={closeAllOpener} link={"/setting"}>
          Setting
        </MenuTab>
      </ul>
    </nav>
  );
}
