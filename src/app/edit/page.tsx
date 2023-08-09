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
    <div className="w-full h-full max-w-screen-sm sm:px-4 sm:border-x-2 border-gray-500 mx-auto">
      <input
        placeholder="title..."
        className="text-slate-700 dark:text-white italic bold border-0 outline-0 text-2xl w-full mr-4 bg-transparent"
      />
      <div className="w-full border-t-2 my-4 border-gray-500"></div>
      <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
      <button className="ml-auto w-32 p-2 rounded-md bg-emerald-400 dark:bg-emerald-700">
        저장
      </button>
    </div>
  );
};

export default Edit;
