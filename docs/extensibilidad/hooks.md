---
title: Hooks
description: Referencia base para entender hooks como automatizacion determinista del ciclo de vida.
sidebar_position: 3
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Los hooks permiten ejecutar acciones deterministas en eventos del ciclo de vida de Claude Code, sin depender de que el modelo decida hacerlo.

## Cuando usarlo

- Cuando una validacion o automatizacion debe ocurrir siempre.
- Cuando necesitas reaccionar a eventos de sesion, compactacion o trabajo en paralelo.

## Riesgos o limites

- Automatizar demasiado pronto puede ocultar complejidad operativa.
- Un hook con efectos laterales mal controlados puede volver opaca una sesion.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Defaults recomendados

- Empezar por hooks simples y observables.
- Documentar eventos, inputs y efectos esperados antes de compartirlos.

## Siguiente lectura

- [Subagentes y agent teams](/extensibilidad/subagentes-y-agent-teams)
- [MCP en Claude Code](/extensibilidad/mcp-en-claude-code)
