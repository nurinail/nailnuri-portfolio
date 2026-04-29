import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://nurinail.me",
			lastModified: new Date(),
		},
		{
			url: "https://nurinail.me/projects",
			lastModified: new Date(),
		},
	];
}
