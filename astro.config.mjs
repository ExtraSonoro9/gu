// @ts-check

const googleAnalyticsId = 'G-Z3R6NF5FQX';


import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({ 
	site: 'https://guiauniversal.net',
  markdown:{
remarkPlugins:[remarkMath],
rehypePlugins:

[rehypeKatex],


  },
	integrations: [
		
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

// Adding google analytics

{

tag: 'script',

attrs: {

 async: true, 
src: "https://www.googletagmanager.com/gtag/js?id=G-Z3R6NF5FQX",

},

},

{

tag: 'script',

content: `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z3R6NF5FQX');`}


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
            'matematica/factorizacion',
            'matematica/ecuacioncuadratica',
           
          ],
        },
        {
          label: 'Análisis Matemático',
          items: [
            'matematica/analisis-matematico/funcionesycorrespondencias',
            'matematica/analisis-matematico/inecuaciones',
            'matematica/analisis-matematico/cotas',
            'matematica/analisis-matematico/limites',
            'matematica/analisis-matematico/indeterminaciones',
            
            'matematica/analisis-matematico/derivadas',
            'matematica/analisis-matematico/regladelacadena',
            'matematica/analisis-matematico/tdecontinuidad',
            'matematica/analisis-matematico/tValorMedioLagrange',
            
            'matematica/analisis-matematico/monotonia',
            'matematica/analisis-matematico/concavidad',
            'matematica/analisis-matematico/optimizacion',
            'matematica/analisis-matematico/razondecambio',
            'matematica/analisis-matematico/LHopital',
            'matematica/analisis-matematico/sumatoria',



 
          ],
        },
      ],
    },
  ], 
      
       
      

			 
      
		}), mdx(),
	],
	

});
