let button_move = document.getElementsByClassName('btn-move');
let statusClick = false;
let objetoactual;
let contCLick = 0;

function ratonPulsado(evt) {
    //Obtener la posición de inicio
    contCLick++;
    xInic = evt.clientX;
    yInic = evt.clientY;
    statusClick = true;
    objetoactual = this.parentElement.parentElement.parentElement.parentElement;
    objetoactual.style.zIndex+=1;
  
    console.log(contCLick);
}
function ratonMovido(evt) {
    if (statusClick) {
        //Calcular la diferencia de posición
        var xActual = evt.clientX;
        var yActual = evt.clientY;
        var xInc = xActual - xInic;
        var yInc = yActual - yInic;
        xInic = xActual;
        yInic = yActual;

        //Establecer la nueva posición
        var elemento = objetoactual;
        var position = new Array(2);
        position[0] = parseInt(document.defaultView.getComputedStyle(objetoactual, null).getPropertyValue("top"));
        position[1] = parseInt(document.defaultView.getComputedStyle(objetoactual, null).getPropertyValue("left"));

        elemento.style.top = (position[0] + yInc) + "px";
        elemento.style.left = (position[1] + xInc) + "px";
        console.log(position);
    }
}

function ratonSoltado() {
    statusClick = false;
}
for (let i = 0; i < button_move.length; i++) {
    button_move[i].addEventListener("mouseup", ratonSoltado);
    button_move[i].addEventListener("mousedown", ratonPulsado);
    button_move[i].addEventListener("touchstart", ratonPulsado);
    button_move[i].addEventListener("touchend", ratonSoltado);
}

document.addEventListener("mousemove", ratonMovido);
document.addEventListener("touchmove", ratonMovido);