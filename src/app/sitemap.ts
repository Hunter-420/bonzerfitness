import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bonzerfitness.laganiforum.com";
  
  const routes = [
    "",
    "/about",
    "/membership",
    "/facilities",
    "/equipment",
    "/personal-training",
    "/transformation-stories",
    "/gallery",
    "/reviews",
    "/faq",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
