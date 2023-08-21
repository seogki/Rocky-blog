import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rocky-blog.vercel.app",
      lastModified: new Date()
    },
    {
      url: "https://rocky-blog.vercel.app/posts",
      lastModified: new Date()
    }
  ];
}
