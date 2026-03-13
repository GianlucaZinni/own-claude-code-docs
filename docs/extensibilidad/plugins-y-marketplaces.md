---
title: Plugins y marketplaces
description: Organiza la extension distribuible de Claude Code y el espacio para compartir capacidades.
sidebar_position: 5
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Plugins y marketplaces permiten distribuir capacidades de Claude Code con estructura, versionado y alcance controlado.

## Cuando usarlo

- Cuando una extension debe compartirse mas alla de un solo repo.
- Cuando necesitas separar capacidad reusable de configuracion local.

## Riesgos o limites

- Empaquetar demasiado pronto como plugin puede fijar una estructura inmadura.
- Los scopes de instalacion y habilitacion deben estar claros para no sorprender al usuario.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Defaults recomendados

- Preferir primero una version local simple y empaquetar despues si hay repeticion real.
- Documentar alcance, dependencias y comandos expuestos.

## Siguiente lectura

- [Skills](/extensibilidad/skills)
- [MCP en Claude Code](/extensibilidad/mcp-en-claude-code)
