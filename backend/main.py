from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Task(BaseModel):
    id: int
    title: str
    complited: bool

#create a list for saving task items   
tasks = []

@app.get("/tasks", summary="Отримати всі задачі")
def read_tasks():
    return tasks


@app.post("/tasks", summary="Створити нову задачу")
def create_task(task: Task):
    tasks.append(task)
    return {"message": "Task added succesfully"}


@app.put("/tasks/{id}", summary="Оновити задачу")
def update_task(id: int, updated_task: Task):
    for index, task in enumerate(tasks):
        if task.id == id:
            tasks[index] = updated_task
            return {"message": "Task updated successfully"}
    return {"error": "Task not found"}


@app.delete("/tasks/{id}", summary="Видалити задачу")
def delete_task(id: int):
    for index, task in enumerate(tasks):
        if task.id == id:
            tasks.pop(index)
            return {"message": "Task deleted successfully"}
    return {"error": "Task not found"}