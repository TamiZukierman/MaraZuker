//FUNCION BIENVENIDA A ESTUDIO BALCON
//DECLARACION DE CLASE ESTUDIO
class Estudio {
    constructor (ubicacion, medida, horas, precioBase) {
    this.ubicacion = ubicacion;
    this.medida = medida;
    this.horas = horas;
    this.precioBase = precioBase;
    }

//---------------------------------------------------METODOS-----------------------------------------------------
//CALCULAR PRECIO TOTAL 
calcularPrecioTotal() {
    let descuento = 1
    if (this.horas>2) {
        descuento = this.calcularDescuento();
        }
    let precioTotal = this.precioBase * descuento * this.horas;
        return `El precio total por ${this.horas} horas en el estudio ${this.ubicacion} es: $${precioTotal}`;
}
//CALCULAR DESCUENTO SEGUN CANTIDAD DE HORAS INGRESADAS (POR CADA HORA AGREGADA SE DESCUENTA UN 5%)
calcularDescuento () {
    let porcentaje = 5;
    return 1 - ((this.horas - 2)*porcentaje)/100;
}
}

//SOLICITAR DATOS AL USUARIO
function solicitarNombre(){
    let nombreIngresado = prompt("Ingresa tu nombre:")
    alert("Buenvenido/a " + nombreIngresado + " a Estudio Balcón, llevar a cabo tus ideas es nuestra pasión!");
    console.log("la persona que ingreso es " + nombreIngresado);
    return nombreIngresado;
}

//FUNCIONES PARA INGRESAR SALA Y CANTIDAD DE HORAS POR PROMPT
function ingresarSala () {
    let ingresarSala;
do {
    ingresarSala = prompt(`Ingresa Palermo, Belgrano o Saavedra según el estudio que necesitas:
        Palermo: 3.5m x 4.5m\n
        Belgrano: 5m x 5m\n
        Saavedra 8m x 10m)\n
        `)
    if (ingresarSala != null) {
        ingresarSala = ingresarSala.toUpperCase();
    }

    if (ingresarSala !== "PALERMO" && ingresarSala !== "BELGRANO" && ingresarSala !== "SAAVEDRA") {
        alert("No has ingresado ninguna opción válida :(");
    } else {
        alert(`Elegiste el estudio ${ingresarSala}!`); 
        console.log(`El estudio elegido es ${ingresarSala}`);
    }
} while (ingresarSala !== "PALERMO" && ingresarSala !== "BELGRANO" && ingresarSala !== "SAAVEDRA");
return ingresarSala;
}

function ingresarHoras () {
let horasIngresadas
do {
    horasIngresadas = parseInt(prompt("Ingresa la cantidad de horas que necesitas (2-8):"));
    if (horasIngresadas < 2 || horasIngresadas > 8) {
        alert("No ingresaste ninguna opción válida :(");
    } else {
        alert(`Seleccionaste ${horasIngresadas} horas!`);
        console.log(`La cantidad de horas ingresadas es ${horasIngresadas} horas!`);
    }
} while (horasIngresadas < 2 || horasIngresadas > 8);
return horasIngresadas;
}

//LLAMADO DE LAS FUNCIONES DE INGRESO
let nombre = solicitarNombre();
let sala = ingresarSala();
let tiempo = ingresarHoras();

let medidaSeleccionada = sala;
let horasSeleccionadas = tiempo;

// Creación de objetos utilizando la clase
let estudio1 = new Estudio ("PALERMO", "3.5m x 4.5m", horasSeleccionadas, 20000);
let estudio2 = new Estudio ("BELGRANO", "5m x 5m", horasSeleccionadas, 25000);
let estudio3 = new Estudio ("SAAVEDRA", "8m x 10m", horasSeleccionadas, 30000);

//ARRAY DE OBJETOS
const estudios = [
estudio1,
estudio2,
estudio3
];

//RECORRER EL ARRAY 
let precioTotal = 0;

for (const estudio of estudios){
    if (estudio.ubicacion === sala){
        precioTotal = estudio.calcularPrecioTotal(tiempo);
        break;
    }
}

alert(precioTotal);