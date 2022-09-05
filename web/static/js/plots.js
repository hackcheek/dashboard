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
    arrayobject.push(JSON.parse(listaString[i].figure));
    counter++;
    id.push(listaString[i].id);
    content.innerHTML +="<div id="+id[i]+" class='box'><div class='move'></div></div>";
    tempID = document.getElementById(id[i]);   
    Plotly.newPlot(tempID,arrayobject[i].data,arrayobject[i].layout,config);
}

// Plotly.newPlot(id[0],arrayobject[0].data,layout,config);
// Plotly.newPlot(id[1],arrayobject[1].data,arrayobject[1].layout,config);
// Plotly.newPlot(id[2],arrayobject[2].data,arrayobject[2].layout,config);


//plots
// Plotly.newPlot( element, jsonData[0].data,jsonData[0].layout,config);
// Plotly.newPlot( TESTER, [{
// 	x: [1, 2, 3, 4, 5],
// 	y: [1, 2, 4, 8, 16] }], {
// 	margin: { t: 0 } } );