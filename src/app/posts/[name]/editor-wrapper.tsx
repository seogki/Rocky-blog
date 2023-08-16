"use client";

import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("@/app/components/editor/Editor"), {
  ssr: false
});

type Props = {
  data: OutputData;
};

export default function EditorWrapper({ data }: Props) {
  return (
    <section>
      <EditorBlock holder="editorjs-container" data={data} readOnly />
    </section>
  );
}
