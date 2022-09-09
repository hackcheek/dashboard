let btn_showvar = document.getElementsByClassName('btn-showvar'); 
let clickShowvar = 0;
for(let i = 0; i < btn_showvar.length; i++) 
{
    btn_showvar[i].addEventListener('click', function() {
        clickShowvar++;
        let objeto = this.parentElement.parentElement.parentElement.parentElement;
        console.log(objeto);
        if(clickShowvar  === 1) Plotly.restyle(objeto,{showlegend: false});
        if(clickShowvar === 2)
        {
            Plotly.restyle(objeto,{showlegend: true});
            clickShowvar = 0;
        } 
        
   
    });
}