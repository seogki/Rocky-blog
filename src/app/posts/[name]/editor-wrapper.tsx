"use client";

import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("@/app/components/Editor"), {
  ssr: false
});

export default function EditorWrapper() {
  return (
    <>
      <EditorBlock holder="editorjs-container" />
    </>
  );
}
