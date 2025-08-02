// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
 import remarkMath from 'remark-math';
 import rehypeKatex from 'rehype-katex';
 import partytown from '@astrojs/partytown'
// https://astro.build/config
export default defineConfig({
	integrations: [
		
		starlight({
			title: 'Guía Universal',
			logo: {
				src: './src/assets/logo.svg',
			  },
			
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Prueba', slug: 'guides/example' },
					],
				},
		
			],
		}), partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
	],
	markdown: {
     remarkPlugins: [remarkMath],
     rehypePlugins: [rehypeKatex],
   },
   
});
