from fastapi import APIRouter


router = APIRouter()


@router.get("/", tags=["Users"])
def get_users():
    """
    Get Users
    """
    return []


@router.post("/", tags=["Users"])
def create_user():
    """
    Create User
    """
    return {}


@router.get("/{user_id}", tags=["Users"])
def get_user(user_id):
    """
    Get User
    """
    return {"id": user_id}


@router.put("/{user_id}", tags=["Users"])
def update_user(user_id):
    """
    Update User
    """
    return {"id": user_id}


@router.delete("/{user_id}", tags=["Users"])
def delete_user(user_id):
    """
    Delete User
    """
    return {"id": user_id}
