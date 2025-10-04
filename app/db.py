from sqlmodel import Session, SQLModel, create_engine

# SQLite-Datei im Projektroot
engine = create_engine("sqlite:///./ordo.db", connect_args={"check_same_thread": False})


def init_db() -> None:
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
