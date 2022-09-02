from fastapi import FastAPI, Request, Form, Depends
from fastapi.responeses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory='templates')
app.mount('/static', StaticFiles(directory='static'), name='static')

@app.get('/', response_class=HTMLResponse)
async def input_page(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})
