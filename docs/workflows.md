---
sidebar_position: 4
title: Workflows
description: Guia base para documentar flujos de trabajo con Claude Code.
---

Esta seccion ordenara workflows de uso de Claude Code para desarrollo, investigacion, automatizacion y mantenimiento.

## Flujo editorial inicial

```mermaid
flowchart LR
    A[Fuente oficial] --> B[Registro en sources/registry.yaml]
    B --> C[Curacion en docs]
    C --> D[Revision en pull request]
    D --> E[Deploy en GitHub Pages]
```

## Temas a cubrir

- Bootstrap de proyectos y scaffolding.
- Analisis de codigo y revisiones tecnicas.
- Generacion de documentacion derivada.
- Mantenimiento de pipelines y operacion del repo.

## Estado

Contenido placeholder. El diagrama Mermaid queda como prueba base del soporte visual del sitio.
