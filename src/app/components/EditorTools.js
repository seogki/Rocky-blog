import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import SimpleImage from "@editorjs/simple-image";
import RawTool from "@editorjs/raw";
import Delimiter from "@editorjs/delimiter";
export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  paragraph: Paragraph,
  image: SimpleImage,
  numberList: {
    class: List,
    inlineToolbar: true
  },
  // bulletList: {
  //   class: List,
  //   inlineToolbar: true,
  //   config: {
  //     defaultStyle: "unordered"
  //   }
  // },
  raw: RawTool,
  embed: Embed,
  delimiter: Delimiter
};
