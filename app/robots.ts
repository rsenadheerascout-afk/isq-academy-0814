import type { Metadata, MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://www.iseeq.lk/sitemap.xml",
    };
}