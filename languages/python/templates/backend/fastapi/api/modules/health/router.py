from fastapi import APIRouter


router = APIRouter()


@router.get("/", tags=["Health"])
def get_health():
    """
    Get Health
    """
    return {"status": "OK"}
