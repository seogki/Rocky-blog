import React, { useEffect, useState } from "react";
import { getCategories } from "../api/posts";
import CategoryTagItem from "./category-tag-item";
import EditorContainer from "./editor-container";

const CategoryTagList = async () => {
  const list = await getCategories();
  return (
    <div className="w-full flex flex-wrap mx-auto">
      {list.map(({ _id, name }) => (
        <CategoryTagItem key={_id} tag={_id} name={name} />
      ))}
    </div>
  );
};

const Edit = () => {
  return (
    <div className="w-full h-full max-w-screen-sm mx-auto flex flex-col relative">
      {/* @ts-expect-error Async Server Component */}
      <CategoryTagList />
      <EditorContainer />
    </div>
  );
};

export default Edit;
