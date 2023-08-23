import { visit } from "unist-util-visit";
import { Toc } from "../interface/posts.interface";

export function rehypeTocExtractHeadings() {
  const scanResult = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const list: Toc[] = [];

  return function (tree: any, { data }: { data: any }) {
    visit(tree, "element", (node) => {
      //   console.debug(node);
      if (scanResult.includes(node.tagName) && node.properties.id) {
        // console.debug(node);
        const obj = {
          href: "",
          parent: "",
          text: ""
        };
        for (const child of node.children) {
          if (child?.properties?.className === "toc") {
            obj.href = child.properties.href;
            obj.parent = node.tagName;
          } else {
            obj.text = child.value;
          }
        }

        list.push(obj);
      }
    });
    data.matter.toc = list;
  };
}
