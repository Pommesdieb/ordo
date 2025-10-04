# Operations / Runbook
Start: `uvicorn app.main:app --reload`
Tests: `pytest` | Lint: `pre-commit run --all-files`
Fehlerbilder: Port belegt → Prozess killen; DB locked → Neustart.
Release: tag, changelog, backup, deploy.
