///////////////////////////////DECLARACION DE CLASE "ESTUDIO"//////////////////////////////////////////////////////
class Estudio {
    constructor (ubicacion, medida, precioBase) {
    this.ubicacion = ubicacion;
    this.medida = medida;
    this.precioBase = precioBase;
    }

//------------------------------------METODOS DE CLASE ESTUDIO---------------------------
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
////////////////////////FUNCION ELECCION DEL ESTUDIO///////////////////////////////////////////////////////
function ingresarSala() {
    // Seleccionar elementos por clase
    const estudioElegido = document.querySelector(".estudio");
    const resultadoEstudio = document.querySelector(".resultado1");

    // Agregar evento de cambio al elemento select
    estudioElegido.addEventListener("change", (event) => {
        Swal.fire({
            text:  `Seleccionaste el estudio: ${event.target.value}`,
            icon: "info",
            iconColor: "#ff1280",
            confirmButtonColor: "#0000EE",
        });
    });
    return estudioElegido;
}
// Llamar a la función para activarla después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", ingresarSala);


//////////////////////////FUNCION ELECCION DE CANTIDAD DE HORAS////////////////////////////////////////////////////
function ingresarHoras () {
    const horasElegidas = document.querySelector(".horas");
    const resultadoHoras = document.querySelector(".resultado2");

    // Agregar evento de cambio al elemento select
    horasElegidas.addEventListener("change", (event) => {
        Swal.fire({
            text:  `Seleccionaste: ${event.target.value} horas`,
            icon: "info",
            iconColor: "#ff1280",
            confirmButtonColor: "#0000EE",
        });
    });
    return horasElegidas.value;
}
// Llamar a la función para activarla después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", ingresarHoras);


/////////////////////////////////////PETICION A JSON LOCAL Y USO DE FETCH///////////////////////////////////////////

let estudios;

const misDatos ="../data/estudios.json";
fetch(misDatos)
    .then((response) => response.json())
    .then((data) => {
        estudios = data;
});


//////////////////////EVENTO CLICK PARA CLACULAR Y ARROJA EL RESULTADO TOTAL AL USUARIO///////////////////////
const totalCotizacion = document.querySelector(".btn-outline-danger");
totalCotizacion.addEventListener("click", (event) => {
    //LLAMADO DE LAS FUNCIONES DE INGRESO
let sala = ingresarSala();
let tiempo = ingresarHoras();

let ubicacionSeleccionada = sala;
let horasSeleccionadas = tiempo;


////////////////RECORRIDO DE LOS OBJETOS DEL ARCHIVO .JSON///////////////////////////////////////////////////
for (estudio of estudios) {

    //CONSTRUCCION DE OBJETO A PARTIR DE .JSON
    let objetoEstudio = new Estudio (estudio.ubicacion, estudio.medida, estudio.precioBase);

if (ubicacionSeleccionada.value === estudio.ubicacion) {
const claculoTotal = document.getElementById("total");
Swal.fire({
    text:  `${objetoEstudio.calcularPrecioTotal(horasSeleccionadas)}`,
    icon: "info",
    iconColor: "#ff1280",
    confirmButtonColor: "#0000EE",
});
}
}   
});




