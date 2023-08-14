import React, { memo, useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
import { useTheme } from "next-themes";
import styles from "./Editor.module.scss";
import { useMount } from "../hooks/useMount";

type Props = {
  data?: OutputData;
  readOnly?: boolean;
  onChange?: (val: OutputData) => void;
  holder: string;
};

const EditorBlock = ({ data, onChange, holder, readOnly = false }: Props) => {
  const ref = useRef<EditorJS>();
  const { isMount } = useMount();
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        readOnly,
        tools: EDITOR_TOOLS,
        placeholder: "Please type anything...",
        data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        }
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id={holder}
      className={`prose max-w-full dark:prose-invert ${
        isMount && theme === "dark" && styles["dark-mode"]
      }`}
    />
  );
};

export default memo(EditorBlock);
