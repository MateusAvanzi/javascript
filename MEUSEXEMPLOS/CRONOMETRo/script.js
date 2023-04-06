let horas = 0
let minutos = 0 
let segundos = 0 
let cronometro;


document.getElementById("inciciar")
document.getElementById("pausar")
document.getElementById("resetar")


function iniciar() {
    cronometro = setInterval(() => {
    segundos ++


    if (segundos == 60) {
        segundos = 0
        minutos ++
    }
    if (minutos == 60) {
        minutos = 0
        horas ++
    }
    
    const tempo = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
    document.getElementById("cronometro").innerText = tempo;
    
}, 1000);

}

function parar() {
    clearInterval(cronometro);

}

function resetar() {
    segundos = 0
    minutos = 0
    horas = 0
    document.getElementById("cronometro").innerText = "00:00:00";
    parar();

}

