"use client";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { getCategories, getPosts } from "../api/posts";
import SaveButton from "../components/save-button";
import { getCategoriesClient } from "./api/route";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

const Categories = async () => {
  const data = await getCategoriesClient();
  // list.json()
  // return (
  //   <>
  //     {list.map(({ key, name }) => (
  //       <div
  //         key={key}
  //         className="py-2 px-4 rounded-xl m-2 bg-amber-600 text-white"
  //       >
  //         {name}
  //       </div>
  //     ))}
  //   </>
  // );
};

const Edit = () => {
  const [data, setData] = useState<OutputData>();

  const saveData = () => {
    console.debug(data);
  };

  return (
    <div className="w-full h-full max-w-screen-sm mx-auto flex flex-col px-4">
      <div className="w-full flex flex-wrap">
        {/* @ts-expect-error Async Server Component */}
        <Categories />
      </div>
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
        <SaveButton>reset</SaveButton>
        <SaveButton className="ml-2" onClick={saveData}>
          save
        </SaveButton>
      </div>
    </div>
  );
};

export default Edit;
