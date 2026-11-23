import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import path from 'path'

export default defineConfig({
	site: 'https://www.example.com', // reemplazar con el dominio real
	trailingSlash: 'never',
	integrations: [svelte(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: { $lib: path.resolve('./src/lib') },
			noExternal: ['@lucide/svelte']
		}
	}
})
