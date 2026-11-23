import { getCollection } from 'astro:content'

export async function getProyectos(disciplina?: string) {
	const all = await getCollection('proyectos')
	return all
		.filter((p) => !disciplina || p.data.disciplinas.includes(disciplina))
		.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order)
}
