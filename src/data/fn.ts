import { Post, PairedPostsByTitle } from "@/interface/posts.interface";
import { toUniqueList } from "@/utils/list";
import { isAlphaNumeric } from "@/utils/regex";

type ReplaceFromTo = { from: string | RegExp; to: string };

type SplitOptions = {
  trim?: boolean;
  lowerCase?: boolean;
  splitBy?: string;
  replace?: ReplaceFromTo;
  alphaNumeric?: boolean;
  uniqueOnly?: boolean;
};

/** by str and options return fit array */
export const splitStr = (str: String, options?: SplitOptions) => {
  let modifiedStr = str;

  if (options?.trim || options?.trim === undefined) {
    modifiedStr = modifiedStr.trim();
  }
  if (options?.lowerCase || options?.lowerCase === undefined) {
    modifiedStr = modifiedStr.toLocaleLowerCase();
  }

  if (options?.replace) {
    const { from, to } = options.replace;
    modifiedStr = modifiedStr.replace(from, to);
  }

  let list = modifiedStr.split(options?.splitBy || " ");

  if (options?.alphaNumeric) {
    list = list.filter((value) => isAlphaNumeric(value));
  }

  if (options?.uniqueOnly) {
    list = toUniqueList(list);
  }

  return list;
};

export const splitPostsByTitle = (posts: Post[]) => {
  const obj: PairedPostsByTitle = {};
  const splitOptions: SplitOptions = {
    replace: { from: /[-.]/g, to: " " },
    alphaNumeric: true,
    uniqueOnly: true
  };

  const setPostByTitle = (title: string, post: Post) =>
    obj[title] ? obj[title]!!.push(post) : (obj[title] = [post]);

  posts.forEach((post) => {
    const titles = splitStr(post.title, splitOptions);
    titles.forEach((title) => setPostByTitle(title, post));
  });

  return obj;
};
