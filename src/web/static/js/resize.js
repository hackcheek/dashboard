let resize_width = document.getElementsByClassName('resize');
// let resize_height = document.getElementsByClassName('resize-bottom');
let action = "";
let objetoactual_resize;
let status_resize = false;
function ratonPulsado_resize(evt) {
    //Obtener la posición de inicio
    contCLick++;
    xInic = evt.clientX;
    yInic = evt.clientY;
    status_resize = true;
    objetoactual_resize = this.parentElement;
    action = this.getAttribute("action");
    console.log(contCLick);
}
function ratonMovido_resize(evt) {
    if (status_resize) {
        //Calcular la diferencia de posición
        var xActual = evt.clientX;
        var yActual = evt.clientY;
        var xInc = xActual - xInic;
        var yInc = yActual - yInic;
        xInic = xActual;
        yInic = yActual;

        //Establecer la nueva posición
        var elemento = objetoactual_resize;
        var dimension = new Array(2);
        dimension[0] = parseInt(document.defaultView.getComputedStyle(objetoactual_resize, null).getPropertyValue("width"));
        dimension[1] = parseInt(document.defaultView.getComputedStyle(objetoactual_resize, null).getPropertyValue("height"));
        if(action === "width")  elemento.style.width = (dimension[0] + xInc) + "px";
        if(action === "height") elemento.style.height = (dimension[1] + yInc) + "px";
        
        
        console.log(dimension);
    }
}



function ratonSoltado_resize(){
    status_resize = false;
}
for(let i=0; i<resize_width.length; i++)
{
    resize_width[i].addEventListener("mouseup", ratonSoltado_resize);
    resize_width[i].addEventListener("mousedown", ratonPulsado_resize);
    resize_width[i].addEventListener("touchstart", ratonPulsado_resize);
    resize_width[i].addEventListener("touchend", ratonSoltado_resize);
}
document.addEventListener("mousemove", ratonMovido_resize);
document.addEventListener("touchmove", ratonMovido_resize);