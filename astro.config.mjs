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
			  
      locales: {
        root: {
          label: 'Español',
          lang: 'es', // lang is required for root locales
        }},
			logo: {
				src: './src/assets/logo.svg',
			  },
			      title: "Guía Universal",
		  sidebar: [
			{
    label: "Información",
    items: [
      { label: "Contacto", link: "/contacto"},
      { label: "Política de Privacidad", link: "/politica-de-privacidad"},
      { label: "Sobre Nosotros", link: "/sobre-nosotros" },
      { label: "Advertencia", link: "/advertencia"}
    ],
  },
    // Un grupo de enlaces etiquetado "Constelaciones".
    {
		
      label: 'Matemática',
      items: [
        'matematica',
        'matematica/bibliografia',
        // Un grupo anidado de enlaces para constelaciones estacionales.
        {
          label: 'Conceptos principales',
          items: [
            'matematica/conjuntos',
            'matematica/multiplicacionydivision',
            'matematica/sumayresta',
            'matematica/potencias',
            'matematica/radicacion',
            'matematica/numerosirracionales',
            'matematica/numeropi',
            'matematica/numeroe',
            'matematica/numerodeoro',
            'matematica/sumatoria',
            
          ],
        },
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
