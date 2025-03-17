from fastapi import APIRouter, status, Request
from fastapi.responses import JSONResponse
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

@router.post('/url-shortener', status_code=status.HTTP_201_CREATED)
async def create_url_shortener(request: Request):
    api_key = os.getenv("URL_SHORTENER_API_KEY")
    data = await request.json()
    
    original_url = data['original_url']    
    
    headers = {
        "X-API-Key": api_key,
        "Content-Type": "application/json"
    }
    
    data = {
        "original_url": original_url
    }
    
    url = os.getenv("URL_SHORTENER_HOST")
    
    
    response = requests.post(url, json=data, headers=headers)
    
    return JSONResponse(response.json())