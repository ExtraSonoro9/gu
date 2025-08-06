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
	site: 'https://extrasonoro9.github.io/gu/',
 
	integrations: [
		partytown({ config: { forward: ['dataLayer.push'] } }),
            sitemap({
				entryLimit: 10000,
      // configuration options
	        filter: (page) =>
       // page !== 'https://www.guiauniversal.net/guides/example2/' &&
        page !== 'https://www.guiauniversal.net/guides/example/',
       
    }),


  


 		starlight({
			  customCss: ['./src/styles/custom.css'],
			favicon: '/favicon.ico',
			
			logo: {
				src: './src/assets/logo.svg',
			  },
			      title: "Guía Universal",
				  sidebar: [
  {
    label: "Lengua",
    autogenerate: { directory: "lengua" }, // Genera automáticamente los links
    collapsed: false,
  },
  {
    label: "Matemática",
    autogenerate: { directory: "matematica" },
    collapsed: false,
  }, 
       
       


],

      components: {
        Sidebar: "./src/components/DynamicSidebar.astro",
        
      },      
      

			 
      
		}), mdx(),
	],
	
	markdown: {
     remarkPlugins: [remarkMath],
     rehypePlugins: [rehypeKatex],
   },
   
});
