let llamada = new Audio('./audio/llamada.mp3');
let cortina = new Audio('./audio/cortina.mp3');


btnLlamada=document.querySelector(".llamada");
btnCortina=document.querySelector(".cortina");

btnLlamada.addEventListener('click', () =>{
    console.log("Boton de llamada presionado");
    btnLlamada.style.backgroundColor = 'yellowgreen';
    llamada.play();
    
    llamada.addEventListener("ended",()=>{
        btnLlamada.style.backgroundColor = '#074C61';
    });
});

btnCortina.addEventListener('click', () =>{
    console.log("Boton de cortina presionado");
    btnCortina.style.backgroundColor = 'yellowgreen';
    cortina.play();
    
    cortina.addEventListener("ended",()=>{
        btnCortina.style.backgroundColor = '#074C61';
    });
});

window.onload = () => {
    document.querySelector(".container").style.opacity='1';
    document.querySelector(".container-loading").style.display='none';
}
    
