from datetime import datetime
from typing import Optional
from sqlmodel import Field, SQLModel


class TaskBase(SQLModel):
    title: str
    done: bool = False
    due_at: Optional[datetime] = None


class Task(TaskBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):
    id: int
    created_at: datetime


class TaskUpdate(SQLModel):
    title: Optional[str] = None
    done: Optional[bool] = None
    due_at: Optional[datetime] = None
