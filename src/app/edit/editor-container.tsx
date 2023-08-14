"use client";

import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";
import SaveButton from "../components/save-button";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

export default function EditorContainer() {
  const [data, setData] = useState<OutputData>();

  const saveData = () => {
    console.debug(data);
  };
  return (
    <>
      <input
        placeholder="title..."
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
        <SaveButton>reset</SaveButton>
        <SaveButton className="ml-2" onClick={saveData}>
          save
        </SaveButton>
      </div>
    </>
  );
}
