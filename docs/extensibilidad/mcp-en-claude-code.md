---
title: MCP en Claude Code
description: Explica MCP solo en el nivel necesario para entender su uso dentro de Claude Code.
sidebar_position: 6
source_ids:
  - anthropic-claude-code-docs-site
  - mcp-official-docs-site
  - mcp-specification-site
---

## Que es / para que sirve

MCP permite conectar Claude Code con herramientas y datos externos mediante un protocolo comun. En este sitio importa por su uso aplicado dentro de Claude Code.

## Cuando usarlo

- Cuando necesitas conectar recursos o herramientas externas al flujo de trabajo.
- Cuando quieres entender de donde salen referencias como `@server:resource`.

## Riesgos o limites

- Tratar MCP como una caja negra vuelve dificil diagnosticar permisos, scopes o fallas de integracion.
- Esta seccion no reemplaza la documentacion completa del protocolo.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`
- `mcp-official-docs-site`
- `mcp-specification-site`

## Defaults recomendados

- Documentar siempre que servidor, recurso o herramienta se esta usando y en que scope vive.
- Mantener separado el conocimiento aplicado en Claude Code de la especificacion completa del protocolo.

## Siguiente lectura

- [Notacion, comandos y referencias](/fundamentals-operativos/notacion-comandos-y-referencias)
- [Mapa de fuentes](/referencias/mapa-de-fuentes)
