# Samuel Ramírez — Portafolio

Sitio en español. Astro + Tailwind, blanco y negro (el color lo ponen los proyectos).

```bash
bun install
bun dev        # http://localhost:4321
bun run build
```

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, frase, email, WhatsApp, redes | `src/data/site.ts` |
| Disciplinas (texto y servicios de cada página) | `src/data/site.ts` → `disciplinas` |
| Proyectos | `src/content/proyectos/*.md` (uno por proyecto) |
| Bio, cifras, colaboradores | `src/components/SobreMi.astro` |
| Colores y tipografía | `src/styles/tokens.css`, `src/styles/global.css` |

## Páginas

- `/` inicio
- `/proyectos` todos los proyectos
- `/proyectos/<archivo>` detalle de un proyecto
- `/coreografia`, `/danza`, `/direccion-creativa`, `/direccion-de-arte`, `/gestion-cultural`, `/arte-contemporaneo`
  — una página por disciplina, para mandarla directo a quien quiere contratar ese servicio.
  Muestra solo los proyectos marcados con esa disciplina.

## Agregar un proyecto

1. Crea una carpeta `src/content/proyectos/mi-proyecto/` con `index.md` y las fotos.
2. En el `index.md`:

```md
---
title: Nombre del proyecto
year: 2025
disciplinas: [coreografia, danza]   # en qué páginas aparece
role: Coreógrafo
client: Opcional
location: Opcional
summary: Una o dos frases.
cover: ./portada.jpg
gallery:
  - src: ./foto-1.jpg
    alt: Descripción de la foto
video: https://player.vimeo.com/video/123456   # opcional (Vimeo o YouTube embed)
featured: true                                  # aparece en el inicio
credits:
  - role: Fotografía
    name: Nombre
---

Texto largo del proyecto.
```

Los 6 proyectos actuales son de ejemplo: reemplázalos o bórralos.
