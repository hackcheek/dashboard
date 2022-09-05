let cajas = document.getElementsByClassName('box');
let statusClick = false;
let objetoactual;
let contCLick = 0;
// function alFondo() {
//     for(let i=0; i<cajas.length; i++) 
//     {
//         // cajas[i].style.zIndex = objetoactual.style.zIndex - 1;
//         if(cajas[i].style.zIndex !==''){
//             cajas[i].style.zIndex = objetoactual.style.zIndex - 1;
//             objetoactual.style.zIndex++;
//         }else{
//             cajas[i].style.zIndex = 1;

//         }
//     }
// }
function ratonPulsado(evt) {
    //Obtener la posición de inicio
    contCLick++;
    xInic = evt.clientX;
    yInic = evt.clientY;
    statusClick = true;
    objetoactual = this;
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
        
    }
}
// function active() {
//     let idactive = this.getAttribute('id');
// }
function ratonSoltado() {
    statusClick = false;
}
// function getPosicion(elemento) {
//     var posicion = new Array(2);
//     if(document.defaultView && document.defaultView.getComputedStyle) {
//         posicion[0] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("top"));
//         posicion[1] = parseInt(document.defaultView.getComputedStyle(elemento, null).getPropertyValue("left"));
//     } else {
//         //Para Internet Explorer
//         posicion[0] = parseInt(elemento.currentStyle.top);             
//         posicion[1] = parseInt(elemento.currentStyle.left);               
//     }      
//     return posicion;
// }
for (let i = 0; i < cajas.length; i++) {
    cajas[i].addEventListener("mouseup", ratonSoltado);
    cajas[i].addEventListener("mousedown", ratonPulsado);


}
document.addEventListener("mousemove", ratonMovido);