"use client";
import { OutputData } from "@editorjs/editorjs";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

const Edit: NextPage = () => {
  const [data, setData] = useState<OutputData>();
  return (
    <div className="w-full h-full max-w-screen-sm sm:px-4 sm:border-x-2 mx-auto">
      <div className="flex flex-wrap justify-between items-center">
        <input
          placeholder="title..."
          className="text-slate-700 italic bold text-2xl flex-1 mr-4"
        />
        <button className="flex-none w-32 p-2 border-2 rounded-md">저장</button>
      </div>
      <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
    </div>
  );
};

export default Edit;
