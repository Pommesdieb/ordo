from fastapi.testclient import TestClient
from app.main import app

c = TestClient(app)


def test_create_and_list_tasks():
    r = c.post("/tasks", json={"title": "t1"})
    assert r.status_code == 200
    tid = r.json()["id"]

    r = c.get("/tasks")
    assert r.status_code == 200
    assert any(t["id"] == tid for t in r.json())

    r = c.get(f"/tasks/{tid}")
    assert r.status_code == 200
    assert r.json()["title"] == "t1"

    r = c.patch(f"/tasks/{tid}", json={"done": True})
    assert r.status_code == 200
    assert r.json()["done"] is True

    r = c.delete(f"/tasks/{tid}")
    assert r.status_code == 204
