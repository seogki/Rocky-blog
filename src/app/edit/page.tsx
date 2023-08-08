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
    <div className="w-full h-full mx-auto grid grid-cols-1 md:grid-cols-3">
      <section></section>
      <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
      <aside>
        <button>저장</button>
      </aside>
    </div>
  );
};

export default Edit;
