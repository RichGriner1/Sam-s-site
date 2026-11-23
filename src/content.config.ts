import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { disciplinas } from './data/site'

const slugs = disciplinas.map((d) => d.slug) as [string, ...string[]]

// Un archivo .md por proyecto en src/content/proyectos.
// Las imágenes van junto al .md (o en src/assets) y se referencian con ruta relativa.
const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			year: z.number(),
			// Las disciplinas deciden en qué páginas aparece el proyecto
			disciplinas: z.array(z.enum(slugs)).min(1),
			role: z.string(),
			client: z.string().optional(),
			location: z.string().optional(),
			summary: z.string(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
			// URL para embeber: https://player.vimeo.com/video/ID o https://www.youtube.com/embed/ID
			video: z.string().url().optional(),
			credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
			featured: z.boolean().default(false),
			order: z.number().default(0)
		})
})

export const collections = { proyectos }
