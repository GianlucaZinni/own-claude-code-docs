---
title: Explorar un codebase
description: Recipe base para usar Claude Code como apoyo al entendimiento de un repositorio.
sidebar_position: 1
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Este workflow ordena el primer contacto con un codebase: ubicar entrypoints, mapear carpetas, identificar convenciones y detectar zonas criticas.

## Cuando usarlo

- Cuando entras a un repo nuevo.
- Cuando necesitas construir un mapa rapido antes de cambiar codigo.

## Riesgos o limites

- Explorar sin un objetivo termina en lectura dispersa.
- Un mapa rapido no reemplaza validar hallazgos en el codigo real.

## Pasos

1. Definir el objetivo de exploracion.
2. Pedir una vista general de estructura y componentes.
3. Seguir entrypoints, config y puntos de integracion.
4. Registrar dudas, riesgos y zonas a verificar despues.

## Criterios de verificacion

- Puedes nombrar entrypoints, modulos principales y convenciones clave.
- Sabes que archivos revisar primero para una tarea concreta.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Debugging y reproduccion](/workflows/debugging-y-reproduccion)
- [Sesiones, contexto y compactacion](/fundamentals-operativos/sesiones-contexto-y-compactacion)
