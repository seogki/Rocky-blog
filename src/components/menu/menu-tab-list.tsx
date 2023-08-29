"use client";
import { closeDrawer, closeMore } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MenuTab from "./menu-tab";

export default function MenuTabList() {
  const { isMore, isDrawerOpen } = useAppSelector(
    ({ headerReducer }) => headerReducer
  );
  const dispatch = useAppDispatch();

  const list = [
    { name: "Posts", link: "/posts" },
    { name: "About", link: "/about" }
  ];

  const closeAllOpener = () => {
    if (isMore) dispatch(closeMore());
    if (isDrawerOpen) dispatch(closeDrawer());
  };

  return (
    <nav className="text-base lg:text-sm font-medium lg:ml-auto">
      <ul className="flex flex-wrap flex-col lg:flex-row">
        {list.map((item) => (
          <MenuTab key={item.name} onClick={closeAllOpener} link={item.link}>
            {item.name}
          </MenuTab>
        ))}
      </ul>
    </nav>
  );
}
