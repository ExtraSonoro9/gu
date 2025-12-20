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
  {
    label: "Informática",
    items: [
      { label: "Conceptos básicos",  items: [
          'programacioneinformatica/introduccion',
          'programacioneinformatica/buclesfor',
          'programacioneinformatica/diagramadeflujo',
          'programacioneinformatica/condicionalesif',

    ],},
    
    { label: "Arduino y Sistemas Embebidos",  items: [
         
    ],},
    
    { label: "Linux",  items: [
          'programacioneinformatica/linuxyservidores/sobrelinux',

    ],}, 
    
    { label: "Ejecutables de Escritorio",  items: [
         
    ],},

     { label: "Apps híbridas y web",  items: [
        
    ],},

    { label: "Videojuegos",  items: [
         
    ],},
     { label: "Bases de Datos",  items: [
         
    ],}
    ],
  },
  {
    label: "Proyectos",
   items: [
      { label: "Emprendedurismo",  items: [

    ],},
    
    { label: "Robot Opencv",  items: [
        
    ],},
    'proyectos/maquinaexpendedoraqr'
   
  
    ],
  },
  {
    label: "Física",
    items: [
      { label: "Conceptos básicos",  items: [
        'fisica/conceptosbasicos/cifrasignmagnitudesherramientas',
        'fisica/conceptosbasicos/cinematica',
        'fisica/conceptosbasicos/arquimedesyflotabilidad',
        'fisica/conceptosbasicos/dinamica',
        'fisica/conceptosbasicos/cristalizacionsedimentacioncoloides',
        'fisica/conceptosbasicos/solidoliquidogas',
        'fisica/conceptosbasicos/traccionycompresion',
        'fisica/conceptosbasicos/torqueinercia',
        'fisica/conceptosbasicos/presion',
        'fisica/conceptosbasicos/poleas',
        'fisica/conceptosbasicos/palanca',
        'fisica/conceptosbasicos/vacio',
        'fisica/conceptosbasicos/plasma',
        'fisica/conceptosbasicos/leydehook',
        'fisica/conceptosbasicos/hidraulica',
        'fisica/conceptosbasicos/friccion',
        'fisica/conceptosbasicos/cifrasignmagnitudesherramientas',

    ],},

    { label: "Electricidad",  items: [
      'fisica/electricidad/campo',
      'fisica/electricidad/voltajeamperajeyresistencia',

         ],},
    
    { label: "Termodinámica",  items: [
      'fisica/termodinamica/calor',
         
    ],}
  
    ],
  },
  {
    label: "Química",
    items: [
     
   
      { label: "Conceptos básicos generales",  items: [
        
         'quimica/general/inicio',
         'quimica/general/herramientas',
         'quimica/general/seguridad', 
         'quimica/general/masaymolesavogadro',
         'quimica/general/metodosdeseparacion',
         'quimica/general/nomenclatura',
         'quimica/general/basesyacidos',
         'quimica/general/balanceyestequiometria',
         'quimica/general/redox',

         'quimica/general/azeotropoypuntoeutectico',
         'quimica/general/pirolisis',
         'quimica/general/electrolisis',
         'quimica/general/endotermiaexotermia',
         'quimica/general/combustion',
         'quimica/general/catalizacion',
         'quimica/general/cristalizacion',
      

    ],},
    
    { label: "Inorgánica",  items: [
         { label: "Metales Alcalinos",  items: [
         'quimica/inorganica/metalesalcalinos/sodio',
         'quimica/inorganica/metalesalcalinos/potasio',
         
         
    ],},{ label: "Metales Transicionales",  items: [
      { label: "Metales Nobles",  items: [
         'quimica/inorganica/metalestransicionales/metalesnobles/cobre',
         'quimica/inorganica/metalestransicionales/metalesnobles/plata',
         'quimica/inorganica/metalestransicionales/metalesnobles/oro',
         
    ],},
         'quimica/inorganica/metalestransicionales/hierro',
         
    ],},{ label: "No Metales",  items: [
         'quimica/inorganica/nometales/carbono',
         'quimica/inorganica/nometales/cloro',
         'quimica/inorganica/nometales/hidrogeno',
         'quimica/inorganica/nometales/oxigeno',
         
    ],},
    ],},
    
    { label: "Orgánica",  items: [
         'quimica/organica/alcholcetonayaldehidos',
         'quimica/organica/carbonoygruposfuncionales',

         'quimica/organica/nomenclaturaorganica',

    ],}
  
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
            'matematica/logaritmos',

           
          ],
        }, {
          label: 'Geometría',
          items: [
            'matematica/geometria/poligono',
            'matematica/geometria/triangulos',

            'matematica/geometria/funcionestrigonometricas',
            'matematica/geometria/identidadestrigonometricas',
            'matematica/geometria/pitagoras',
            'matematica/geometria/ttales',
            'matematica/geometria/planocartesianorectacomponentes',
            'matematica/geometria/parabola',
            





           
          ],
        },{
          label: 'Álgebra',
          items: [
            'matematica/algebra/vectores',
            'matematica/algebra/nimaginarios',
            'matematica/algebra/matrices',
            'matematica/algebra/determinantes',
            'matematica/algebra/polinomiosyraices',
            'matematica/algebra/sistemasdeecuaciones',
            






            
            





           
          ],
        },
        {
          label: 'Análisis Matemático',
          items: [
   
            'matematica/analisis-matematico/funcionesycorrespondencias',
            'matematica/analisis-matematico/aproximaciondefunciones',
            'matematica/analisis-matematico/inecuaciones',
            

            'matematica/analisis-matematico/limites',
            'matematica/analisis-matematico/indeterminaciones',
            
            'matematica/analisis-matematico/derivadas',
            'matematica/analisis-matematico/tdecontinuidad',
            
        
            'matematica/analisis-matematico/optimizacion',
            'matematica/analisis-matematico/razondecambio',
            'matematica/analisis-matematico/lhopital',
            'matematica/analisis-matematico/sumatoria',
            'matematica/analisis-matematico/staylor',
            'matematica/analisis-matematico/integral',
            
            'matematica/analisis-matematico/arealongvolumen',




 
          ],
        },
      ],
    },
  ], 
      
       
      

			 
      
		}), mdx(),
	],
	

});
