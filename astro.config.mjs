// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
 import remarkMath from 'remark-math';
 import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({ 
	site: 'https://guiauniversal.net',
 
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
						{ label: 'Prueba1', slug: 'guides/example' },   
					    { slug: 'guides/example2' },					
					],
				},
		
			],
		}), 
	],
	markdown: {
     remarkPlugins: [remarkMath],
     rehypePlugins: [rehypeKatex],
   },
   
});
