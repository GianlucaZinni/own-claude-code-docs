---
title: Permisos, sandboxing y checkpoints
description: Capa de control de riesgo para trabajar con Claude Code sobre codigo y terminal.
sidebar_position: 3
source_ids:
  - anthropic-claude-code-docs-site
---

## Que es / para que sirve

Permisos, sandboxing y checkpoints son la red de seguridad que permite delegar tareas reales sin perder control sobre archivos, comandos y rollback.

## Cuando usarlo

- Cuando vas a editar codigo o ejecutar comandos con impacto real.
- Cuando necesitas acordar un nivel de autonomia por tarea o por repo.

## Riesgos o limites

- Sin limites claros, Claude Code puede intentar mas de lo que deberia.
- Sin checkpoints, un cambio amplio se vuelve costoso de revisar o revertir.

## Fuentes utilizadas

- `anthropic-claude-code-docs-site`

## Siguiente lectura

- [Refactor seguro con Plan mode](/workflows/refactor-seguro-con-plan-mode)
- [Scopes y precedencia](/configuracion-y-operacion-en-equipo/scopes-y-precedencia)
