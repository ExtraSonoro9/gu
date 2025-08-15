// @ts-check

const googleAnalyticsId = 'G-Z3R6NF5FQX';


import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
      
      
       head: [
  // Configuración de Partytown para reenviar llamadas a dataLayer.push
 
  // Añadiendo Google Analytics con Partytown
  {
    tag: 'script',
    attrs: {
      type: 'text/partytown',
      src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
    },
  },
  {
    tag: 'script',
    attrs: {
      type: 'text/partytown',
    },
    content: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag("consent", "default", {
         

      });
    `,
  },
],
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
	

});
