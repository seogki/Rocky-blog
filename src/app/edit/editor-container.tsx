"use client";

import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SaveButton from "../components/save-button";
import { SavePostPayload } from "../interface/posts.interface";
import { savePost } from "../redux/features/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const EditorBlock = dynamic(() => import("@/app/components/editor/Editor"), {
  ssr: false
});

export default function EditorContainer() {
  const [data, setData] = useState<OutputData>();
  const [title, setTitle] = useState("");
  const { tagKey } = useAppSelector(({ editReducer }) => editReducer);
  const { success, error } = useAppSelector(({ postReducer }) => postReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

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

  useEffect(() => {
    if (success) {
      router.replace("/");
    }
  }, [success, router]);

  return (
    <>
      <textarea
        placeholder="Please add title..."
        value={title}
        rows={2}
        onChange={(e) => setTitle(e.target.value)}
        className="block text-slate-700 mt-4 basis-14 flex-none dark:text-white placeholder:italic
         bold border-0 outline-0 focus:outline-0 text-xl bg-transparent"
      />
      <div className="w-full border-b-2 my-2 border-gray-500"></div>
      <div className="grow">
        <EditorBlock
          data={data}
          onChange={setData}
          holder="editorjs-container"
        />
      </div>
      <div className="ml-auto flex flex-row basis-1/12 mb-8 mr-2">
        <SaveButton>RESET</SaveButton>
        <SaveButton className="ml-2" onClick={saveData}>
          SAVE
        </SaveButton>
        {/* <SaveButton className="ml-2" onClick={saveData}>
          Save
        </SaveButton> */}
      </div>
    </>
  );
}
