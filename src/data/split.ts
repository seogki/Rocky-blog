import { Post, PairedPostsByTitle } from "@/interface/posts.interface";
import { toUniqueList } from "@/utils/list";
import { isAlphaNumeric } from "@/utils/regex";

export const splitPostsByTitle = (posts: Post[]) => {
  const obj: PairedPostsByTitle = {};

  const getUniqueAlphaNumericTitles = (str: string) => {
    return toUniqueList(
      str
        .toLocaleLowerCase()
        .replace(/[-.]/g, " ")
        .split(" ")
        .filter((title) => isAlphaNumeric(title))
    );
  };

  const setPostByTitle = (title: string, post: Post) =>
    obj[title] ? obj[title]!!.push(post) : (obj[title] = [post]);

  posts.forEach((post) => {
    const titles = getUniqueAlphaNumericTitles(post.title);
    titles.forEach((title) => setPostByTitle(title, post));
  });

  return obj;
};
