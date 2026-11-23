// Datos generales del sitio. Todo el texto editable vive aquí o en src/content/proyectos.

export const site = {
	name: 'Samuel Ramirez',
	title: 'Coreógrafo, artista contemporáneo y director de movimiento',
	// TODO: frase final — "Artista multidisciplinario que…"
	tagline: 'Artista multidisciplinario que crea desde el cuerpo, el espacio y la comunidad.',
	description:
		'Samuel Ramirez — coreógrafo, artista contemporáneo y director de movimiento. Coreografía, danza, dirección creativa, dirección de arte y proyectos culturales.',
	// ID del video de YouTube del reel (lo que va después de youtu.be/)
	reelYoutubeId: 'gRCCaDovSAM',
	// Video de fondo del hero: qué tramo del reel se repite (en segundos).
	// end: segundo donde termina el baile (el reel funde a negro ~49s y luego vienen créditos).
	// Si es 0, se recortan los últimos `cutEnd` segundos.
	reelLoop: { start: 0, end: 49, cutEnd: 5 },
	// Servicio que recibe el formulario de contacto (ej. https://formspree.io/f/xxxx).
	// Vacío = el formulario abre el correo del visitante con todo ya escrito.
	formEndpoint: '',
	// TODO: datos reales de contacto
	email: 'hola@samuelramirez.com',
	whatsapp: '', // ej. '5215512345678' (sin + ni espacios)
	socials: {
		instagram: 'https://instagram.com/',
		vimeo: '',
		youtube: ''
	}
}

export type Disciplina = {
	slug: string
	name: string
	short: string
	intro: string
	services: string[]
}

// Cada disciplina tiene su propia página (/coreografia, /danza, …) para mandarla directo a un cliente.
export const disciplinas: Disciplina[] = [
	{
		slug: 'coreografia',
		name: 'Coreografía',
		short: 'Piezas escénicas, videoclips, campañas y eventos.',
		intro:
			'Diseño de movimiento para escena, cámara y marca. Cada pieza parte de una idea clara y se construye con el cuerpo de quienes la interpretan.',
		services: [
			'Coreografía para escena y festivales',
			'Movimiento para videoclips y publicidad',
			'Dirección de movimiento para cine y moda',
			'Montaje para eventos y lanzamientos'
		]
	},
	{
		slug: 'danza',
		name: 'Danza',
		short: 'Intérprete en escena, video y performance.',
		intro:
			'Intérprete con trayectoria en danza contemporánea, performance y proyectos interdisciplinarios, en escenario y frente a cámara.',
		services: [
			'Intérprete para obras y compañías',
			'Performance en vivo para eventos y marcas',
			'Danza para video, cine y fotografía',
			'Talleres y clases magistrales'
		]
	},
	{
		slug: 'direccion-creativa',
		name: 'Dirección creativa',
		short: 'Concepto y visión de principio a fin.',
		intro:
			'Del concepto a la ejecución: defino la idea, el tono y el equipo para que un proyecto se vea y se sienta como una sola cosa.',
		services: [
			'Concepto y narrativa de campañas',
			'Dirección de shootings y piezas audiovisuales',
			'Lanzamientos y experiencias de marca',
			'Curaduría y dirección de equipos creativos'
		]
	},
	{
		slug: 'direccion-de-arte',
		name: 'Dirección de arte',
		short: 'Imagen, espacio y estética de cada proyecto.',
		intro:
			'Construyo el mundo visual de un proyecto: espacio, vestuario, objetos, luz y color al servicio de una sola idea.',
		services: [
			'Dirección de arte para video y fotografía',
			'Escenografía y diseño de espacio',
			'Vestuario y styling',
			'Identidad visual de proyectos escénicos'
		]
	},
	{
		slug: 'gestion-cultural',
		name: 'Gestión cultural',
		short: 'Festivales, encuentros y programas comunitarios.',
		intro:
			'Diseño y produzco proyectos que conectan artistas, instituciones y comunidad: festivales, residencias, encuentros y programas formativos.',
		services: [
			'Diseño y producción de festivales',
			'Programación y curaduría de eventos',
			'Proyectos culturales comunitarios',
			'Vinculación con instituciones y marcas'
		]
	},
	{
		slug: 'arte-contemporaneo',
		name: 'Arte contemporáneo',
		short: 'Performance, instalación y obra en sitio.',
		intro:
			'Obra propia en la frontera entre cuerpo, espacio e imagen: performance, instalación y piezas creadas para un lugar específico.',
		services: [
			'Performance para museos y galerías',
			'Instalación y obra en sitio específico',
			'Residencias artísticas',
			'Colaboraciones con otros artistas'
		]
	}
]

export const getDisciplina = (slug: string) => disciplinas.find((d) => d.slug === slug)

export function contactHref(subject = 'Proyecto') {
	return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}
