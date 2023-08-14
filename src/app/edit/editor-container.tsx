"use client";

import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";
import SaveButton from "../components/save-button";
import { SavePostPayload } from "../interface/posts.interface";
import { savePost } from "../redux/features/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

export default function EditorContainer() {
  const [data, setData] = useState<OutputData>();
  const [title, setTitle] = useState("");
  const { tagKey } = useAppSelector(({ editReducer }) => editReducer);
  const dispatch = useAppDispatch();

  const saveData = () => {
    console.debug(data);
    if (!data || !data.blocks) {
      console.warn("데이터가 없습니다");
      return;
    }

    if (data?.blocks.length < 1) {
      console.warn("값이 비어있습니다");
      return;
    }

    if (!title || title === "") {
      console.warn("타이틀이 비어있습니다");
      return;
    }

    if (!tagKey) {
      console.warn("타입을 선택해주세요");
      return;
    }

    const obj: SavePostPayload = {
      categoryId: tagKey,
      title,
      description: JSON.stringify(data)
    };

    dispatch(savePost(obj));
  };
  return (
    <>
      <input
        placeholder="title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-slate-700 basis-8 mt-4 dark:text-white placeholder:italic bold border-0 outline-0 focus:outline-0 text-xl bg-transparent"
      />
      <div className="w-full border-b-2 my-2 border-gray-500"></div>
      <div className="basis-10/12 min-h-[calc(100% - 4rem)] h-full w-full">
        <EditorBlock
          data={data}
          onChange={setData}
          holder="editorjs-container"
        />
      </div>
      <div className="ml-auto flex flex-row basis-1/12 mb-8 mr-4">
        <SaveButton>Reset</SaveButton>
        <SaveButton className="ml-2" onClick={saveData}>
          Temp Save
        </SaveButton>
        {/* <SaveButton className="ml-2" onClick={saveData}>
          Save
        </SaveButton> */}
      </div>
    </>
  );
}
