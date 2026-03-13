# Contributing

## Objetivo

Este repositorio concentra documentacion propia sobre Claude Code basada en fuentes rastreables y curadas.

## Flujo de trabajo

1. Crear una rama desde `main`.
2. Registrar o actualizar fuentes si el cambio depende de material externo.
3. Editar la documentacion o la infraestructura necesaria.
4. Ejecutar `npm run lint` y `npm run build`.
5. Abrir un pull request con contexto claro y cambios acotados.

## Convenciones

- Idioma base: espanol.
- Estilo editorial: tecnico, claro y orientado a desarrolladores.
- Assets publicables: solo en `static/`.
- Trazabilidad: toda fuente externa debe existir en `sources/registry.yaml`.
- Material crudo pesado: no se versiona en el repo.

## Ramas sugeridas

- `docs/<tema>`
- `chore/<area>`
- `infra/<area>`

## Checklist antes de abrir PR

- El contenido nuevo tiene fuente registrada cuando aplica.
- No hay links internos rotos.
- Mermaid y MDX renderizan correctamente si fueron tocados.
- El cambio no introduce assets no publicables en rutas del sitio.
