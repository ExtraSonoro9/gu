// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
		}),
	],
});
