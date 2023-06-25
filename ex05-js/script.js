document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector("#botao");
    botao.style.background = "blue";

    let estaQUebrado=false;
    let contaClick=0;

        botao.addEventListener("mouseover",e =>{
            if(estaQUebrado===false)
                botao.style.background="green"
        })

        botao.addEventListener("mouseout",e =>{
            if(estaQUebrado===false)
                botao.style.background="blue"
        })

        botao.addEventListener("click",e =>{
            contaClick++;
            if(contaClick>=10){
                botao.style.background="red"
                botao.innerHTML="quebrei"
                estaQUebrado=true
            }
            
        })

  });
  