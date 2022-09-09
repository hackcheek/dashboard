 let button_active = document.getElementsByClassName('btn-active');
 let graph_actual;
 function activeGrapgh(objeto){
    graph_actual = objeto;
    let data = JSON.parse(graph_actual.getAttribute('data'));
    Plotly.newPlot(graph_actual, data.data, data.layout,config); 
    Plotly.newPlot(graph_actual, data.data, data.layout,config); 
   
 }
 for (let i = 0; i < button_active.length; i++) {
    button_active[i].addEventListener('click',function(e) {
      let objeto = this.parentElement.parentElement.parentElement.parentElement;
      activeGrapgh(objeto);
    });
    
}
