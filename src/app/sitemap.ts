import { MetadataRoute } from "next";
import { getAllPostsOrderByDate, getCategories } from "@/data";
import { stringToDate } from "@/utils/date";
import { toUniqueList } from "@/utils/list";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.rockyblog.dev";

  const sitemapList: MetadataRoute.Sitemap = [
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
      priority: 0.7
    });
  }

  const posts = await getAllPostsOrderByDate();

  // const tags = toUniqueList(posts.map((post) => post.tags).flat());

  // for (const tag of tags) {
  //   sitemapList.push({
  //     url: `${baseUrl}/posts?tag=${tag}`,
  //     changeFrequency: "weekly",
  //     lastModified: new Date(),
  //     priority: 0.4
  //   });
  // }

  for (const post of posts) {
    if (!post || post === null) continue;

    sitemapList.push({
      url: `${baseUrl}/posts/${post.category}/${post.slug}`,
      changeFrequency: "always",
      lastModified: stringToDate(post.date, "DD/MM/YYYY"),
      priority: 0.7
    });
  }

  return sitemapList;
}
