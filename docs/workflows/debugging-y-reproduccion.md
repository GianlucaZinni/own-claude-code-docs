---
title: Debugging y reproduccion
description: Recipe para pasar de un problema reportado a una reproduccion y una verificacion concreta.
sidebar_position: 2
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Este workflow usa Claude Code para ordenar debugging tecnico: reproducir el problema, formar hipotesis, instrumentar y verificar la correccion.

## Cuando usarlo

- Cuando un bug todavia no tiene reproduccion confiable.
- Cuando necesitas separar sintomas, causa probable y evidencia.

## Riesgos o limites

- Debugging sin reproduccion consistente degrada la calidad del diagnostico.
- La hipotesis mas plausible no siempre es la causa real.

## Pasos

1. Reproducir el fallo con el menor contexto posible.
2. Pedir hipotesis ordenadas por probabilidad.
3. Instrumentar logs, tests o inspecciones puntuales.
4. Aplicar el cambio minimo y volver a ejecutar la reproduccion.

## Criterios de verificacion

- Existe una reproduccion clara antes del fix.
- El fix elimina la reproduccion sin romper casos cercanos.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Testing y verificacion](/workflows/testing-y-verificacion)
- [Permisos, sandboxing y checkpoints](/fundamentals-operativos/permisos-sandboxing-y-checkpoints)
