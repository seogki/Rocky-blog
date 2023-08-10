"use client";
import { OutputData } from "@editorjs/editorjs";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import SaveButton from "../components/save-button";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

const Edit: NextPage = () => {
  const [data, setData] = useState<OutputData>();
  return (
    <div className="w-full h-full max-w-screen-sm mx-auto flex flex-col px-4">
      <input
        placeholder="title..."
        className="w-full text-slate-700 basis-8 mt-4 dark:text-white placeholder:italic bold border-0 outline-0 focus:outline-0 text-xl bg-transparent"
      />
      <div className="w-full border-b-2 my-2 border-gray-500"></div>
      <div className="flex-auto h-full w-full">
        <EditorBlock
          data={data}
          onChange={setData}
          holder="editorjs-container"
        />
      </div>
      <div className="ml-auto flex flex-row basis-8 mb-8 mr-4">
        <SaveButton>초기화</SaveButton>
        <SaveButton className="ml-2">저장</SaveButton>
      </div>
    </div>
  );
};

export default Edit;
