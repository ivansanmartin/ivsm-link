from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from .routers.api import router as url_shortener_router


app = FastAPI()

origins = [
    "https://ivsm.link",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(url_shortener_router, prefix='/api')