---
title: Modelos, costos y variables de entorno
description: Organiza la configuracion de modelos, aliases, costos y variables de entorno relevantes.
sidebar_position: 3
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Esta pagina ordena la parte operativa de configuracion que impacta costo, proveedores, aliases y comportamiento por entorno.

## Cuando usarlo

- Cuando necesitas alinear defaults de modelo para el equipo.
- Cuando quieres entender como influye el entorno en el comportamiento de Claude Code.

## Riesgos o limites

- Afinar costos sin mirar contexto y workflows suele optimizar el lugar equivocado.
- Variables de entorno mal documentadas generan configuraciones imposibles de reproducir.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Defaults recomendados

- Documentar modelos y aliases aceptados por el equipo.
- Versionar solo la parte compartible y dejar lo sensible en entorno local o gestionado.

## Siguiente lectura

- [GitHub Actions y Code Review](/integraciones-y-ci-cd/github-actions-y-code-review)
- [Scopes y precedencia](/configuracion-y-operacion-en-equipo/scopes-y-precedencia)
