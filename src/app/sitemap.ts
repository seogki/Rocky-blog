import { MetadataRoute } from "next";
import { getCategories, getPostsByCategoryName } from "./data";
import { stringToDate } from "./utils/date";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getCategories();
  const baseUrl = "https://rocky-blog.vercel.app";

  const sitemapList = [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date()
    }
  ];

  for await (const category of categories) {
    const posts = await getPostsByCategoryName(category);
    for (const post of posts) {
      if (!post || post === null) continue;

      sitemapList.push({
        url: `${baseUrl}/posts/${category}/${post.slug}`,
        lastModified: stringToDate(post.date, "DD/MM/YYYY")
      });
    }
  }

  return sitemapList;
}
