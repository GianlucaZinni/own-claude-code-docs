import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduccion y principios',
      items: [
        'introduccion-y-principios/que-es-claude-code',
        'introduccion-y-principios/modelo-agentico-y-loop-operacional',
        'introduccion-y-principios/superficies-limites-y-rol-humano',
      ],
    },
    {
      type: 'category',
      label: 'Setup y onboarding',
      items: [
        'setup-y-onboarding/instalacion-y-autenticacion',
        'setup-y-onboarding/entorno-terminal-y-ergonomia',
        'setup-y-onboarding/troubleshooting-inicial',
      ],
    },
    {
      type: 'category',
      label: 'Fundamentals operativos',
      items: [
        'fundamentals-operativos/sesiones-contexto-y-compactacion',
        'fundamentals-operativos/memoria-proyecto-y-claude-md',
        'fundamentals-operativos/permisos-sandboxing-y-checkpoints',
        'fundamentals-operativos/notacion-comandos-y-referencias',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      link: { type: 'doc', id: 'workflows' },
      items: [
        'workflows/explorar-un-codebase',
        'workflows/debugging-y-reproduccion',
        'workflows/refactor-seguro-con-plan-mode',
        'workflows/testing-y-verificacion',
        'workflows/worktrees-y-multitarea',
      ],
    },
    {
      type: 'category',
      label: 'Configuracion y operacion en equipo',
      items: [
        'configuracion-y-operacion-en-equipo/scopes-y-precedencia',
        'configuracion-y-operacion-en-equipo/archivos-reservados-y-estado-global',
        'configuracion-y-operacion-en-equipo/modelos-costos-y-variables-de-entorno',
      ],
    },
    {
      type: 'category',
      label: 'Extensibilidad',
      items: [
        'extensibilidad/claude-md-como-contrato-operativo',
        'extensibilidad/skills',
        'extensibilidad/hooks',
        'extensibilidad/subagentes-y-agent-teams',
        'extensibilidad/plugins-y-marketplaces',
        'extensibilidad/mcp-en-claude-code',
      ],
    },
    {
      type: 'category',
      label: 'Integraciones y CI/CD',
      items: [
        'integraciones-y-ci-cd/github-actions-y-code-review',
        'integraciones-y-ci-cd/gitlab-headless-y-cli',
      ],
    },
    {
      type: 'category',
      label: 'Referencias',
      link: { type: 'doc', id: 'referencias' },
      items: ['referencias/glosario', 'referencias/mapa-de-fuentes'],
    },
  ],
};

export default sidebars;
