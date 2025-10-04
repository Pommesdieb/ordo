# Architektur (High Level)
- Schichten: UI ↔ API(FastAPI) ↔ Domain ↔ SSOT-DB(SQLite/PG)
- Events/Automationen: Event-Bus (später)
## Diagramm
[Web UI] -> [FastAPI] -> [Domain] -> [DB]
                     \-> [LLM Assist]
## Module (v1)
- tasks, notes, calendar(ics), auth(light), backup
