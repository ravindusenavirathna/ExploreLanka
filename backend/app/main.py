from fastapi import FastAPI
from api import image_routes

app = FastAPI()

app.include_router(image_routes.router)
