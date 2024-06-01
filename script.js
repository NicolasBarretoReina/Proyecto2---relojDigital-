function calcularTiempo(){
    
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let tiempoPantalla = hora + ":" + minuto + ":" + segundo;
    let relojDigital = document.querySelector(".Reloj");
    relojDigital.innerHTML = tiempoPantalla;
}

setInterval(calcularTiempo, 1000);