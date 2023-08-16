import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import SimpleImage from "@editorjs/simple-image";
import RawTool from "@editorjs/raw";
// import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
export const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    levels: [2, 3, 4],
    defaultLevel: 3
  },
  paragraph: Paragraph,
  image: {
    class: SimpleImage,
    inlineToolbar: true
  },
  // warning: Warning,
  list: {
    class: List,
    inlineToolbar: true
  },
  raw: RawTool,
  embed: Embed,
  delimiter: Delimiter
};
