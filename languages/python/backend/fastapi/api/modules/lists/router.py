from fastapi import APIRouter


router = APIRouter()


@router.get("/", tags=["Lists"])
def get_lists():
    """
    Get Lists
    """
    return []


@router.post("/", tags=["Lists"])
def create_list():
    """
    Create List
    """
    return {}


@router.get("/{list_id}", tags=["Lists"])
def get_list(list_id):
    """
    Get List
    """
    return {"id": list_id}


@router.put("/{list_id}", tags=["Lists"])
def update_list(list_id):
    """
    Update List
    """
    return {"id": list_id}


@router.delete("/{list_id}", tags=["Lists"])
def delete_list(list_id):
    """
    Delete List
    """
    return {"id": list_id}
