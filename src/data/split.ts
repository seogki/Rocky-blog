import { Post, PairedPostsByTitle } from "@/interface/posts.interface";
import { toUniqueList } from "@/utils/list";
import { isAlphaNumeric } from "@/utils/regex";

export const splitPostsByTitle = (posts: Post[]) => {
  const obj: PairedPostsByTitle = {};

  posts.forEach((post) => {
    const spList = post.title
      .toLocaleLowerCase()
      .replaceAll("-", " ")
      .replaceAll(".", " ")
      .split(" ");
    toUniqueList(spList).forEach((title) => {
      if (isAlphaNumeric(title)) {
        const list = obj[title] ?? [];
        list.push(post);
        obj[title] = list;
      }
    });
  });

  return obj;
};
