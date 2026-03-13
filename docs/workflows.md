---
slug: /workflows
sidebar_position: 4
title: Workflows
description: Landing page de recipes y flujos de trabajo operativos con Claude Code.
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Esta seccion traduce las capacidades de Claude Code en procedimientos repetibles: explorar, depurar, refactorizar, verificar y trabajar en paralelo.

## Cuando usarlo

- Cuando necesitas pasar de entender una feature a operarla con criterio.
- Cuando quieres documentar recipes reutilizables para el equipo.

## Riesgos o limites

- Un workflow sin verificacion clara se vuelve una receta incompleta.
- Un workflow no reemplaza el criterio humano ni la revision tecnica.

## Flujo de trabajo base

```mermaid
flowchart LR
    A[Entender el objetivo] --> B[Elegir workflow]
    B --> C[Ejecutar pasos]
    C --> D[Verificar resultados]
    D --> E[Registrar hallazgos]
```

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Explorar un codebase](/workflows/explorar-un-codebase)
- [Refactor seguro con Plan mode](/workflows/refactor-seguro-con-plan-mode)
