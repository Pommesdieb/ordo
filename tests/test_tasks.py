from fastapi.testclient import TestClient

from app.main import app


def test_create_and_list_tasks():
    # Lifespan/Startup (init_db) läuft nur im Kontextmanager sicher
    with TestClient(app) as c:
        r = c.post("/tasks", json={"title": "t1"})
        assert r.status_code == 200

        r = c.get("/tasks")
        assert r.status_code == 200
        items = r.json()
        assert any(t["title"] == "t1" for t in items)
