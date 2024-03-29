import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"

const ignore = []

// https://astro.build/config
export default defineConfig({
	site: "https://jakebaxendale.com/",
	integrations: [
		sitemap({
			canonicalURL: "https://jakebaxendale.com/",
			filter: (page) => !ignore.includes(page),
			lastmod: new Date(),
		}),
	],
})
