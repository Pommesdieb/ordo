# API (Auszug)
GET /health → 200 {"status":"ok"}
POST /tasks {title, due_at?} → 200 Task
GET /tasks → 200 [Task]
PATCH /tasks/{id} {title?, done?, due_at?} → 200 Task
DELETE /tasks/{id} → 204
