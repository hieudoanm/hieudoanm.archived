from fastapi import FastAPI
from api.modules.health.router import router as HealthRouter
from api.modules.users.router import router as UsersRouter
from api.modules.lists.router import router as ListsRouter
from api.modules.tasks.router import router as TasksRouter


app = FastAPI(
    title="FastAPI Template",
    summary="FastAPI Summary",
    description="FastAPI Description",
    version="0.0.1",
    contact={
        "name": "Hieu Doan",
        "url": "https://hieudoanm.github.io",
        "email": "hieumdoan@gmail.com",
    },
    license_info={
        "name": "GNU General Public License",
        "url": "https://www.gnu.org/licenses/gpl-3.0.html",
    },
    redoc_url="/",
    docs_url="/swagger",
)


app.include_router(HealthRouter, prefix="/health")
app.include_router(UsersRouter, prefix="/users")
app.include_router(ListsRouter, prefix="/lists")
app.include_router(TasksRouter, prefix="/tasks")
