
const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];

const fecha = new Date();
console.log(fecha);
  
const mes =  meses[fecha.getMonth()];
const diaSemana = diasSemana[fecha.getDay()];
const dia = fecha.getDate();
const year = fecha.getFullYear();
const hora = fecha.getHours();
const minuto = fecha.getMinutes();
const segundo = fecha.getSeconds();
console.log(year);

function tiempoRestante() {
    const fecha = new Date();
    const endYear = new Date(year, 11, 31, 23, 59, 59);
    const dif = endYear - fecha;

    const segundosFaltantes = Math.floor(dif / 1000);
    const minutosFaltantes = Math.floor(segundosFaltantes / 60);
    const horasFaltantes = Math.floor(minutosFaltantes / 60);
    const diasFaltantes = Math.floor(horasFaltantes / 24);

    const segundos = segundosFaltantes % 60;
    const minutos = minutosFaltantes % 60;
    const horas = horasFaltantes % 24;

    return `Quedan ${diasFaltantes} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para que termine el año.`;
}

function actualizarTiempoRestante() {
    const tiempoRestanteTexto = tiempoRestante();
    $("#tiemporestante").html(tiempoRestanteTexto);
}

$(document).ready(() => {
    actualizarTiempoRestante();
    setTimeout(() => { 
      alert(`Hoy es ${diaSemana} ${dia} de ${mes} de ${year}, y son las ${hora} horas, ${minuto} minutos con ${segundo} segundos.`);
    }, '500');
    setInterval(actualizarTiempoRestante, 1000);
});