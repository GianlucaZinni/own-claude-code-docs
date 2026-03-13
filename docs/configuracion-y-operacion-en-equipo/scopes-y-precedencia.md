---
title: Scopes y precedencia
description: Ordena donde vive la configuracion y que nivel gana cuando hay conflicto.
sidebar_position: 1
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Claude Code combina configuracion de usuario, proyecto, local, managed y sesion. Entender su precedencia evita decisiones contradictorias.

## Cuando usarlo

- Cuando defines defaults de equipo.
- Cuando una configuracion no se comporta como esperabas.

## Riesgos o limites

- Cambiar un scope sin entender la precedencia crea diagnosticos falsos.
- Mezclar defaults globales y locales dificulta compartir configuracion de equipo.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Defaults recomendados

- Documentar que configuracion es de equipo y cual es personal.
- Revisar conflictos de precedencia antes de asumir un bug.

## Siguiente lectura

- [Archivos reservados y estado global](/configuracion-y-operacion-en-equipo/archivos-reservados-y-estado-global)
- [Modelos, costos y variables de entorno](/configuracion-y-operacion-en-equipo/modelos-costos-y-variables-de-entorno)
