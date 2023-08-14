"use client";

import { setTagKey } from "../redux/features/editSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function CategoryTagItem({
  tag,
  name
}: {
  tag: string;
  name: string;
}) {
  const { tagKey } = useAppSelector(({ editReducer }) => editReducer);
  const dispatch = useAppDispatch();

  return (
    <div
      key={tag}
      className={`${
        tagKey === tag ? "bg-amber-300 text-black" : "bg-amber-600 text-white"
      } py-2 px-4 rounded-2xl m-2 text-sm`}
      onClick={() => dispatch(setTagKey(tag))}
    >
      {name}
    </div>
  );
}
