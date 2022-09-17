const input = document.querySelector("input");
const button = document.querySelector("button");
const span = document.querySelector("span");

button.addEventListener("click", (e)=>{

    e.preventDefault();

    let valor = input.value;
    
    if(valor >0 ){
        let resultado = valor * 520;
        span.innerHTML = resultado;      
        input.value = "";
    } else {alert("Cantidad Incorrecta")}

})
