import os
import plotly.express as px

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


data = px.data.stocks()
fig = px.bar(data,['AAPL'])
response = jsonable_encoder(jsonable_encoder(fig.to_json()))


@app.get('/', response_class=HTMLResponse)
async def helloworld(request: Request):
     return templates.TemplateResponse('index.html', {'request': request,'data':response})


# @app.get('/data', response_class=JSONResponse)
# async def plotly_data():
#     fig = px.line(data['AAPL'])
#     response = jsonable_encoder(fig.to_json())
#     return JSONResponse(
#         content=response
#     )
