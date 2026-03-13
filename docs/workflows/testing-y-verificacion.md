---
title: Testing y verificacion
description: Recipe para convertir cambios y hallazgos en evidencia tecnica verificable.
sidebar_position: 4
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Este workflow integra tests, comandos de validacion y revision de salida como parte del ciclo normal de trabajo con Claude Code.

## Cuando usarlo

- Cuando un cambio necesita evidencia antes de considerarse aceptable.
- Cuando quieres usar Claude Code como apoyo a una verificacion disciplinada.

## Riesgos o limites

- Verificar demasiado tarde obliga a rehacer varios pasos.
- Un resultado en verde no reemplaza revisar que se haya testeado lo correcto.

## Pasos

1. Definir que evidencia valida el cambio.
2. Ejecutar tests, linters o comandos relevantes.
3. Revisar fallas y ajustar.
4. Repetir hasta que la evidencia cierre el objetivo.

## Criterios de verificacion

- Existe una prueba o comando alineado con el objetivo del cambio.
- El resultado final deja evidencia reproducible, no solo percepcion.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Debugging y reproduccion](/workflows/debugging-y-reproduccion)
- [GitHub Actions y Code Review](/integraciones-y-ci-cd/github-actions-y-code-review)
