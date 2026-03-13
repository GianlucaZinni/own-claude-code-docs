# Sources

La carpeta `sources/` es la biblioteca editorial interna del proyecto. No se publica en GitHub Pages y funciona como backstage para trazabilidad, investigacion y curacion.

## Estructura canonica

- `registry.yaml`: catalogo unico de fuentes externas.
- `01-original/`: snapshots tecnicos, descargas y fuentes importadas sin editar.
- `02-extracted/`: extracciones y merges derivados de fuentes primarias.
- `03-research/`: notas propias, comparativas, hypotheses y sintesis de trabajo.
- `04-curation/`: borradores ya preparados para transformarse en `docs/`.
- `99-archive/`: duplicados y material desplazado que se conserva solo por trazabilidad.

## Convenciones

- Registrar cada fuente externa en `registry.yaml` antes de derivar contenido.
- Mantener un `README.md` indice en cada carpeta con contenido versionado.
- Usar estados editoriales locales: `original`, `extracted`, `research`, `curated`, `archived`.
- Referenciar fuentes externas con `source_ids` que existan en `registry.yaml`.
- Reservar `docs/` para contenido curado y publicable.
- No deduplicar corpora descargados en esta fase; si hay redundancias, se archivan fuera del snapshot.

## Carpetas ignoradas

- `sources/raw/`: materiales crudos temporales o pesados.
- `sources/tmp/`: trabajo transitorio de curacion.

Ambas rutas siguen ignoradas por Git.
