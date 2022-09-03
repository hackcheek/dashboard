import os
import plotly.express as px

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.encoders import jsonable_encoder
from starlette.responses import HTMLResponse, JSONResponse
from plotly.graph_objects import Figure


def apple_shares() -> Figure:
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='AAPL', 
        title='Apple'
    )
    return fig


def microsoft_shares() -> Figure:
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='MSFT', 
        title='Microsoft'
    )
    return fig


def price_shares() -> Figure:
    data = px.data.stocks().set_index('date').iloc[-1]
    fig = px.bar(
        data, 
        title='Comparativa', 
        labels={'index': 'Acciones', 'variable': 'Dia'}
    )
    return fig 


def netflix_shares() -> Figure:
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='NFLX', 
        title='Netflix'
    )
    return fig


def google_shares() -> Figure:
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='GOOG', 
        title='Google'
    )
    return fig


app = FastAPI()

web_dir = os.path.dirname(__file__)
static_path = os.path.join(web_dir, "static/")
templates_path = os.path.join(web_dir, "templates/")

app.mount("/static", StaticFiles(directory=static_path), name="static")
templates = Jinja2Templates(directory=templates_path)

objects = [price_shares(), apple_shares(), microsoft_shares(), google_shares(), netflix_shares()]
graphs = [jsonable_encoder(i.to_json()) for i in objects]


@app.get('/', response_class=HTMLResponse)
async def helloworld(request: Request):
    return templates.TemplateResponse('index.html', {'request': request, 'data': graphs})

# @app.get('/', response_class=JSONResponse)
# async def plotly_data():
#     fig = px.line(data['AAPL'])
#     response = jsonable_encoder(fig.to_json())
#     return JSONResponse(
#         content=response
#     )
