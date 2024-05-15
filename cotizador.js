///////////////////////////////DECLARACION DE CLASE "ESTUDIO"//////////////////////////////////////////////////////
class Estudio {
    constructor (ubicacion, medida, precioBase) {
    this.ubicacion = ubicacion;
    this.medida = medida;
    this.precioBase = precioBase;
    }

//------------------------------METODOS DE CLASE ESTUDIO------------------------------------------------------------
//METODO CALCULAR PRECIO TOTAL 
calcularPrecioTotal(horas) {
    let descuento = 1
    if (horas>2) {
        descuento = this.calcularDescuento(horas);
        }
    let precioTotal = this.precioBase * descuento * horas;
        return `El precio total por ${horas} horas en el estudio ${this.ubicacion} es: $${precioTotal}`;
}
//METODO CALCULAR DESCUENTO SEGUN CANTIDAD DE HORAS INGRESADAS (POR CADA HORA AGREGADA SE DESCUENTA UN 5%)
calcularDescuento (horas) {
    let porcentaje = 5;
    return 1 - ((horas - 2)*porcentaje)/100;
}
}

///////////////////////////////////////SOLICITAR DATOS AL USUARIO///////////////////////////////////////////////////
//FUNCION ELECCION DEL ESTUDIO
function ingresarSala() {
    // Seleccionar elementos por clase
    const estudioElegido = document.querySelector(".estudio");
    const resultadoEstudio = document.querySelector(".resultado1");

    // Agregar evento de cambio al elemento select
    estudioElegido.addEventListener("change", (event) => {
        resultadoEstudio.textContent = `Seleccionaste el estudio: ${event.target.value}`;
    });
    return estudioElegido;
}
// Llamar a la función para activarla después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", ingresarSala);


//FUNCION ELECCION DE CANTIDAD DE HORAS
function ingresarHoras () {
    const horasElegidas = document.querySelector(".horas");
    const resultadoHoras = document.querySelector(".resultado2");

    // Agregar evento de cambio al elemento select
    horasElegidas.addEventListener("change", (event) => {
        resultadoHoras.textContent = `Seleccionaste: ${event.target.value} horas`;
    });
    return horasElegidas.value;
}
// Llamar a la función para activarla después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", ingresarHoras);



// CREACION DE OBJETOS (LOS 3 ESTUDIOS) UTILIZANDO CLASE
let estudio1 = new Estudio ("PALERMO", "3.5m x 4.5m", 20000);
let estudio2 = new Estudio ("BELGRANO", "5m x 5m", 25000);
let estudio3 = new Estudio ("SAAVEDRA", "8m x 10m", 30000);

//ARRAY DE LOS OBJETOS
const estudios = [
estudio1,
estudio2,
estudio3
];

///////////////////////////EVENTO CLICK PARA CLACULAR Y ARROJA EL RESULTADO TOTAL AL USUARIO/////////////////////////////////////////
const totalCotizacion = document.querySelector(".btn-outline-danger");
totalCotizacion.addEventListener("click", (event) => {
    //LLAMADO DE LAS FUNCIONES DE INGRESO
let sala = ingresarSala();
let tiempo = ingresarHoras();

let ubicacionSeleccionada = sala;
let horasSeleccionadas = tiempo;

for (estudio of estudios) {
if (ubicacionSeleccionada.value === estudio.ubicacion) {
const claculoTotal = document.getElementById("total");
claculoTotal.textContent = `${estudio.calcularPrecioTotal(horasSeleccionadas)}`;
}
//else if (ubicacionseleccionada.value === "" || horasSeleccionadas === "") {
    //claculoTotal.textContent = ("No selecciono alguna o ambas opciones");
//}
}
}
);
