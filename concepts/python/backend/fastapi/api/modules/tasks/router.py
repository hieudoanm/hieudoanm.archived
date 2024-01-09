from fastapi import APIRouter


router = APIRouter()


@router.get("/", tags=["Tasks"])
def get_tasks():
    """
    Get Tasks
    """
    return []


@router.post("/", tags=["Tasks"])
def create_task():
    """
    Create Task
    """
    return {}


@router.get("/{task_id}", tags=["Tasks"])
def get_task(task_id):
    """
    Get Task
    """
    return {"id": task_id}


@router.put("/{task_id}", tags=["Tasks"])
def update_task(task_id):
    """
    Update Task
    """
    return {"id": task_id}


@router.delete("/{task_id}", tags=["Tasks"])
def delete_task(task_id):
    """
    Delete Task
    """
    return {"id": task_id}
