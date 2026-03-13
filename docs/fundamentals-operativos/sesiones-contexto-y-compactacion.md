---
title: Sesiones, contexto y compactacion
description: Base para entender continuidad de trabajo, uso del contexto y tecnicas de compactacion.
sidebar_position: 1
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Claude Code trabaja por sesiones. Entender como se acumula el contexto y cuando compactarlo es clave para mantener claridad y costo bajo control.

## Cuando usarlo

- Cuando una tarea ya no cabe comodamente en una sola conversacion.
- Cuando necesitas retomar trabajo sin reexplicar todo desde cero.

## Riesgos o limites

- Compactar tarde degrada foco y performance.
- Compactar mal puede perder decisiones que luego eran necesarias.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Memoria, proyecto y CLAUDE.md](/fundamentals-operativos/memoria-proyecto-y-claude-md)
- [Worktrees y multitarea](/workflows/worktrees-y-multitarea)
