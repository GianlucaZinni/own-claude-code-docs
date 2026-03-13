---
title: Worktrees y multitarea
description: Recipe para trabajar en paralelo con aislamiento por rama y por contexto.
sidebar_position: 5
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Los worktrees permiten correr varias lineas de trabajo en paralelo sin mezclar cambios, contexto ni sesiones.

## Cuando usarlo

- Cuando una investigacion larga no debe bloquear otra tarea.
- Cuando quieres separar refactors, fixes o research por rama y directorio.

## Riesgos o limites

- Abrir worktrees sin criterio genera limpieza pendiente y ramas huerfanas.
- La multitarea sin nomenclatura clara complica retomar despues.

## Pasos

1. Elegir un nombre de worktree ligado al objetivo.
2. Abrir la sesion en ese entorno aislado.
3. Trabajar con una sola responsabilidad por worktree.
4. Cerrar y limpiar cuando el objetivo termine.

## Criterios de verificacion

- Cada tarea paralela tiene un espacio aislado y entendible.
- Puedes retomar una rama o un contexto sin contaminar otra linea de trabajo.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Sesiones, contexto y compactacion](/fundamentals-operativos/sesiones-contexto-y-compactacion)
- [Explorar un codebase](/workflows/explorar-un-codebase)
