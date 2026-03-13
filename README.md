# Claude Code Docs

Documentacion interactiva, curada y orientada a desarrolladores para comprender Claude Code desde una unica fuente de verdad.

El repositorio esta preparado para publicar con GitHub Pages usando Docusaurus, Markdown/MDX y GitHub Actions, sin depender de una rama `gh-pages`.

## Stack

- GitHub
- Docusaurus 3 + TypeScript
- Markdown / MDX
- GitHub Actions
- GitHub Pages
- Mermaid para diagramas

## Puesta en marcha local

```bash
npm ci
npm run start
```

Comandos utiles:

```bash
npm run lint
npm run build
npm run serve
```

## Estructura base

```text
.
|- .github/              # Workflows, templates y automatizacion del repo
|- docs/                 # Documentacion publicada
|- sources/              # Registro interno y trazabilidad de fuentes
|- src/                  # CSS y personalizaciones del sitio
|- static/               # Assets publicables
|- docusaurus.config.ts  # Configuracion principal
`- sidebars.ts           # Sidebar autogenerado
```

## Convenciones del proyecto

- La documentacion vive en la raiz del sitio, no en `/docs`.
- El build esta preparado para GitHub Project Pages en `/own-claude-code-docs/`.
- `sources/` no se publica; se usa para trazabilidad y curacion.
- No se versionan PDFs ni materiales crudos pesados dentro del repo publicado.
- El idioma base es espanol. Las fuentes originales pueden permanecer en ingles.

## Registro de fuentes

El archivo [sources/registry.yaml](sources/registry.yaml) centraliza las referencias externas que luego alimentaran la documentacion curada. Antes de incorporar contenido derivado, registrar la fuente ahi.

## Checklist manual de GitHub

1. Crear el repositorio publico `own-claude-code-docs` en GitHub.
2. Empujar la rama `main`.
3. En `Settings > Pages`, elegir `GitHub Actions` como source.
4. Activar proteccion liviana sobre `main` y exigir que pase `CI`.
5. Revisar que el owner final coincida con `GianlucaZinni`; si cambia, ajustar `DOCS_GITHUB_OWNER` o [docusaurus.config.ts](docusaurus.config.ts).

## Deploy esperado

Con el owner por defecto actual, el sitio se publicara en:

```text
https://GianlucaZinni.github.io/own-claude-code-docs/
```

## Gobernanza

- Guia de contribucion: [CONTRIBUTING.md](CONTRIBUTING.md)
- Politica de seguridad: [SECURITY.md](SECURITY.md)
- Licencia: [LICENSE](LICENSE)
