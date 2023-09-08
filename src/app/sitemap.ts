import { MetadataRoute } from "next";
import { getAllPostsOrderByDate, getCategories } from "@/data";
import { stringToDate } from "@/utils/date";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.rockyblog.dev";

  const sitemapList = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8
    }
  ];

  const categories = await getCategories();

  for (const category of categories) {
    sitemapList.push({
      url: `${baseUrl}/posts/${category.name}`,
      changeFrequency: "always",
      lastModified: new Date(),
      priority: 0.8
    });
  }

  const posts = await getAllPostsOrderByDate();

  for (const post of posts) {
    if (!post || post === null) continue;

    sitemapList.push({
      url: `${baseUrl}/posts/${post.category}/${post.slug}`,
      changeFrequency: "weekly",
      lastModified: stringToDate(post.date, "DD/MM/YYYY"),
      priority: 0.5
    });
  }

  return sitemapList;
}
