//variables
let element = document.getElementById('data');
let data = element.getAttribute('data');
let jsonData = JSON.parse(data);
let layout = {
    title: "Responsive data",
    font: {size: 18}
}
let config = {responsive: true};

Plotly.newPlot( element, [{x:jsonData.data[0].x,y:jsonData.data[0].y}],layout,config );
// Plotly.newPlot( TESTER, [{
// 	x: [1, 2, 3, 4, 5],
// 	y: [1, 2, 4, 8, 16] }], {
// 	margin: { t: 0 } } );