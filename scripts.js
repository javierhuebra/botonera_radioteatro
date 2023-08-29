let llamada = new Audio('./audio/llamada.mp3');
let cortina = new Audio('./audio/cortina.mp3');
let testigo = new Audio('./audio/testimonio.mp3');
let aplauso = new Audio('./audio/aplausos.mp3');
let inicio = new Audio('./audio/inicio.mp3');
let caja = new Audio('./audio/caja.mp3');
let cuco = new Audio('./audio/timbre.mp3');//esto es cuco
let piano = new Audio('./audio/piano.mp3');
let bosqueTene = new Audio('./audio/bosquetenebroso.mp3');
let puerta = new Audio('./audio/puerta.mp3');
let sonando=false;

btnLlamada=document.querySelector(".llamada");
btnCortina=document.querySelector(".cortina");
btnTestigo=document.querySelector(".testigo");
btnAplauso=document.querySelector(".aplausos");
btnInicio=document.querySelector(".inicio");
btnCaja=document.querySelector(".caja");
btnCuco=document.querySelector(".cuco");
btnPiano=document.querySelector(".piano");
btnBosqueTene=document.querySelector(".bosqueTenebroso");
btnPuerta=document.querySelector(".puerta");

btnLlamada.addEventListener('click', () =>{
    console.log("Boton de llamada presionado");
    if(sonando==false){
        sonando=true;
        btnLlamada.style.backgroundColor = 'yellowgreen';
        llamada.play();
    }else{
        llamada.pause();
        llamada.currentTime=0;
        sonando=false;
        btnLlamada.style.backgroundColor = '#074C61';
    
    }
});
llamada.addEventListener("ended",()=>{
    sonando=false;
    btnLlamada.style.backgroundColor = '#074C61';
});

btnCortina.addEventListener('click', () =>{
    console.log("Boton de cortina presionado");
    if(sonando==false){
        sonando=true;
        btnCortina.style.backgroundColor = 'yellowgreen';
        cortina.play();
    }else{
        cortina.pause();
        cortina.currentTime=0;
        sonando=false;
        btnCortina.style.backgroundColor = '#074C61';
    
    }
});
cortina.addEventListener("ended",()=>{
    sonando=false;
    btnCortina.style.backgroundColor = '#074C61';
});


btnTestigo.addEventListener('click', () =>{
    console.log("Boton de cortina presionado");
    if(sonando==false){
        sonando=true;
        btnTestigo.style.backgroundColor = 'yellowgreen';
        testigo.play();
    }else{
        testigo.pause();
        testigo.currentTime=0;
        sonando=false;
        btnTestigo.style.backgroundColor = '#074C61';
    
    }
});
testigo.addEventListener("ended",()=>{
    sonando=false;
    btnTestigo.style.backgroundColor = '#074C61';
});

btnAplauso.addEventListener('click', () =>{
    console.log("Boton de cortina presionado");
    if(sonando==false){
        sonando=true;
        btnAplauso.style.backgroundColor = 'yellowgreen';
        aplauso.play();
    }else{
        aplauso.pause();
        aplauso.currentTime=0;
        sonando=false;
        btnAplauso.style.backgroundColor = '#074C61';
    
    }
}); 
aplauso.addEventListener("ended",()=>{
    sonando=false;
    btnAplauso.style.backgroundColor = '#074C61';
});

btnInicio.addEventListener('click', () =>{
    console.log("Boton de llamada presionado");
    if(sonando==false){
        sonando=true;
        btnInicio.style.backgroundColor = 'yellowgreen';
        inicio.play();
    }else{
        inicio.pause();
        inicio.currentTime=0;
        sonando=false;
        btnInicio.style.backgroundColor = '#074C61';
    
    }
});
inicio.addEventListener("ended",()=>{
    sonando=false;
    btnInicio.style.backgroundColor = '#074C61';
});

btnCaja.addEventListener('click', () =>{
    console.log("Boton de Caja presionado");
    if(sonando==false){
        sonando=true;
        btnCaja.style.backgroundColor = 'yellowgreen';
        caja.play();
    }else{
        caja.pause();
        caja.currentTime=0;
        sonando=false;
        btnCaja.style.backgroundColor = '#074C61';
    
    }
});
caja.addEventListener("ended",()=>{
    sonando=false;
    btnCaja.style.backgroundColor = '#074C61';
});

btnCuco.addEventListener('click', () =>{
    console.log("Boton de javi presionado");
    if(sonando==false){
        sonando=true;
        btnCuco.style.backgroundColor = 'yellowgreen';
        cuco.play();
    }else{
        cuco.pause();
        cuco.currentTime=0;
        sonando=false;
        btnCuco.style.backgroundColor = '#074C61';
    
    }
});
cuco.addEventListener("ended",()=>{
    sonando=false;
    btnCuco.style.backgroundColor = '#074C61';
});

btnPiano.addEventListener('click', () =>{
    console.log("Boton de piano presionado");
    if(sonando==false){
        sonando=true;
        btnPiano.style.backgroundColor = 'yellowgreen';
        piano.play();
    }else{
        piano.pause();
        piano.currentTime=0;
        sonando=false;
        btnPiano.style.backgroundColor = '#074C61';
    
    }
});
piano.addEventListener("ended",()=>{
    sonando=false;
    btnPiano.style.backgroundColor = '#074C61';
});

btnBosqueTene.addEventListener('click', () =>{
    console.log("Boton de piano presionado");
    if(sonando==false){
        sonando=true;
        btnBosqueTene.style.backgroundColor = 'yellowgreen';
        bosqueTene.play();
    }else{
        bosqueTene.pause();
        bosqueTene.currentTime=0;
        sonando=false;
        btnBosqueTene.style.backgroundColor = '#074C61';
    
    }
});
bosqueTene.addEventListener("ended",()=>{
    sonando=false;
    btnBosqueTene.style.backgroundColor = '#074C61';
});

btnPuerta.addEventListener('click', () =>{
    console.log("Boton de piano presionado");
    if(sonando==false){
        sonando=true;
        btnPuerta.style.backgroundColor = 'yellowgreen';
        puerta.play();
    }else{
        puerta.pause();
        puerta.currentTime=0;
        sonando=false;
        btnPuerta.style.backgroundColor = '#074C61';
    
    }
});
puerta.addEventListener("ended",()=>{
    sonando=false;
    btnPuerta.style.backgroundColor = '#074C61';
});


window.onload = () => {
    document.querySelector(".container").style.opacity='1';
    document.querySelector(".container-loading").style.display='none';
}
    
