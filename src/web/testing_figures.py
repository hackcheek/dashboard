import os

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.encoders import jsonable_encoder
from starlette.responses import HTMLResponse


app = FastAPI()

web_dir = os.path.dirname(__file__)
static_path = os.path.join(web_dir, "static/")
templates_path = os.path.join(web_dir, "templates/")

app.mount("/static", StaticFiles(directory=static_path), name="static")
templates = Jinja2Templates(directory=templates_path)

graphs = []
for filename in os.listdir('src/web/testing_figures'):
    with open(f'src/web/testing_figures/{filename}') as file: 
        json = dict(
            id=filename,
            figure=file.read()
        )
        graphs.append(json)


@app.get('/', response_class=HTMLResponse)
async def helloworld(request: Request):
    return templates.TemplateResponse(
        'index.html', 
        {'request': request, 'data': jsonable_encoder(graphs)}
    )
