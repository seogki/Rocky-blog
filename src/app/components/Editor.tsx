import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";
import { useTheme } from "next-themes";
import styles from "./Editor.module.scss";
//props
type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

const EditorBlock = ({ data, onChange, holder }: Props) => {
  const ref = useRef<EditorJS>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
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
        theme === "dark" && styles["dark-mode"]
      }`}
    />
  );
};

export default memo(EditorBlock);
