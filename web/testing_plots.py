import os
import plotly.express as px
import json 

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.encoders import jsonable_encoder
from starlette.responses import HTMLResponse, JSONResponse
from plotly.graph_objects import Figure
from typing import Tuple, Literal


def apple_shares() -> Tuple[Figure, Literal['apple_shares']]:
    id = 'apple_shares'
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='AAPL', 
        title='Apple'
    )
    return fig, id


def microsoft_shares() -> Tuple[Figure, Literal['microsoft_shares']]:
    id = 'microsoft_shares'
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='MSFT', 
        title='Microsoft'
    )
    return fig, id


def price_shares() -> Tuple[Figure, Literal['price_shares']]:
    id = 'price_shares'
    data = px.data.stocks().set_index('date').iloc[-1]
    fig = px.bar(
        data, 
        title='Comparativa', 
        labels={'index': 'Acciones', 'variable': 'Dia'}
    )
    return fig , id


def netflix_shares() -> Tuple[Figure, Literal['netflix_shares']]:
    id = 'netflix_shares'
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='NFLX', 
        title='Netflix'
    )
    return fig, id


def google_shares() -> Tuple[Figure, Literal['google_shares']]:
    id = 'google_shares'
    data = px.data.stocks()
    fig = px.line(
        data, 
        x='date', 
        y='GOOG', 
        title='Google'
    )
    return fig, id


app = FastAPI()

web_dir = os.path.dirname(__file__)
static_path = os.path.join(web_dir, "static/")
templates_path = os.path.join(web_dir, "templates/")

app.mount("/static", StaticFiles(directory=static_path), name="static")
templates = Jinja2Templates(directory=templates_path)

objects = [price_shares(), apple_shares(), microsoft_shares(), google_shares(), netflix_shares()]
graphs = [
    dict(
        id=i[1],
        figure=i[0].to_json()
    ) 
    for i in objects
]

@app.get('/', response_class=HTMLResponse)
async def helloworld(request: Request):
    return templates.TemplateResponse(
        'index.html', 
        {'request': request, 'data': json.dumps(graphs)}
    )

# @app.get('/', response_class=JSONResponse)
# async def plotly_data():
#     fig = px.line(data['AAPL'])
#     response = jsonable_encoder(fig.to_json())
#     return JSONResponse(
#         content=response
#     )
