import { MetadataRoute } from "next";
import { getAllPostsOrderByDate } from "@/data";
import { stringToDate } from "@/utils/date";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rocky-blog.vercel.app";

  const sitemapList = [
    {
      url: baseUrl,
      lastModified: new Date()
    }
  ];

  const posts = await getAllPostsOrderByDate();

  for (const post of posts) {
    if (!post || post === null) continue;

    sitemapList.push({
      url: `${baseUrl}/posts/${post.category}/${post.slug}`,
      lastModified: stringToDate(post.date, "DD/MM/YYYY")
    });
  }

  return sitemapList;
}
