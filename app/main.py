from fastapi import FastAPI

app = FastAPI(title="Ordo")


@app.get("/health")
def health():
    return {"status": "ok"}
