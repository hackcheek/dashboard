import os

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.responses import HTMLResponse

app = FastAPI()


web_dir = os.path.dirname(__file__)
path = os.path.join(web_dir, "static/")

app.mount("/static", StaticFiles(directory=path), name="static")
templates = Jinja2Templates(directory='templates')

@app.get('/', response_class=HTMLResponse)
async def input_page(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
