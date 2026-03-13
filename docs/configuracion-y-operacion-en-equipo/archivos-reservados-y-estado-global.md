---
title: Archivos reservados y estado global
description: Resume los archivos de estado y configuracion que sostienen la operacion de Claude Code.
sidebar_position: 2
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Esta pagina identifica archivos y artefactos reservados que afectan autenticacion, estado global, MCP y configuracion del proyecto.

## Cuando usarlo

- Cuando necesitas diagnosticar por que una sesion se comporta distinto a otra.
- Cuando quieres documentar que archivos conviene versionar y cuales no.

## Riesgos o limites

- Tocar estos archivos sin contexto puede romper estado, login o configuracion compartida.
- No todo archivo reservado debe tratarse como parte del repo.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Defaults recomendados

- Explicitar en el equipo que artefactos son locales y cuales forman parte del proyecto.
- Tratar los cambios sobre estos archivos como cambios de infraestructura, no de feature.

## Siguiente lectura

- [Scopes y precedencia](/configuracion-y-operacion-en-equipo/scopes-y-precedencia)
- [MCP en Claude Code](/extensibilidad/mcp-en-claude-code)
