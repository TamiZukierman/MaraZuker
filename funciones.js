

//FUNCION SOLICITAR NOMBRE POR PROMTP
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
