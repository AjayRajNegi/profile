import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: siteConfig.name,
    short_name: "Ajay",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
};

export default manifest;
