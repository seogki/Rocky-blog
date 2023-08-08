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
    <div className="w-full h-full mx-auto">
      <input
        placeholder="제목"
        className="text-state-700 italic bold text-2xl"
      />
      <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
    </div>
  );
};

export default Edit;
