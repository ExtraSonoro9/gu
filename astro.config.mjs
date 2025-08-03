// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
 import remarkMath from 'remark-math';
 import rehypeKatex from 'rehype-katex';
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({ 
	site: 'https://guiauniversal.net',
 
	integrations: [
		partytown({ config: { forward: ['dataLayer.push'] } }),
            sitemap({
				entryLimit: 10000,
      // configuration options
	        filter: (page) =>
        page !== 'https://www.guiauniversal.net/guides/example2/' &&
        page !== 'https://www.guiauniversal.net/guides/example/',
       
    }),
 		starlight({
			favicon: 'public/favicon.svg',
			title: 'Guía Universal',
			logo: {
				src: './src/assets/logo.svg',
			  },
			
			sidebar: [
				{ label: 'Contacto', slug: 'contacto' },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Prueba1', slug: 'guides/example' },   
					    { slug: 'guides/example2' },					
					],
				},
				
		
			],
		}), mdx(),
	],
	markdown: {
     remarkPlugins: [remarkMath],
     rehypePlugins: [rehypeKatex],
   },
   
});
