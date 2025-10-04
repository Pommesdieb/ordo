# Ordo – Digitaler Alltagsbegleiter (SSOT)

![CI](https://github.com/Pommesdieb/ordo/actions/workflows/ci.yml/badge.svg)

## Vision
Eine Single Source of Truth für Tasks, Notizen, Kalender – mit LLM-Assist.

## Quickstart
```bash
python3.12 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload  # → http://127.0.0.1:8000/docs

PYTHONPATH=. pytest -q -vv
