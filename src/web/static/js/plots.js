//variables
let element = document.getElementById('data');
let data = element.getAttribute('data');
let content =  document.getElementById("content");
let listaString = eval(data);
let arrayobject = [];
let counter = 0;
let id = [];
let tempID; 


let layout = {
    title: "Responsive data",
    font: {size: 8},
    margin: {autoexpand: true}
}
let config = {responsive: true};
for (let i = 0; i < listaString.length; i++) 
{
    // listaString[i].figure.layout.legend.orientation = "h";
    // listaString[i].figure.layout.legend.x = 0;
    // listaString[i].figure.layout.legend.y = 1.1;
    arrayobject.push(JSON.parse(listaString[i].figure));
    counter++;
    arrayobject[i].layout.legend['orientation'] = "h";
    arrayobject[i].layout.legend.x = 0;
    arrayobject[i].layout.legend.y = 1.1;
    id.push(listaString[i].id);
    content.innerHTML +="<div id="+id[i]+" class='box'><div class='panel_window'><ul><li><button class='btn btn-move'><ion-icon name='ellipsis-horizontal-outline'></ion-icon></button></li><li><button class='btn btn-active'><ion-icon name='flag-outline'></ion-icon></button></li><li><button class='btn btn-showvar'><ion-icon name='eye-outline'></ion-icon></button></li></ul></div><div class='resize resize-bottom' action='height'></div><div class='resize resize-right' action='width'></div></div>";
    tempID = document.getElementById(id[i]);
    tempID.setAttribute('data',listaString[i].figure);   
    Plotly.newPlot(tempID,arrayobject[i].data,arrayobject[i].layout,config);
}
// let layouts = {
//     title: {
//         font:{
//             size: 8
//         }
//     },
//     legend: {
//         orientation: "h",
//         x: 0,
//         y: 1
//     }
// }


